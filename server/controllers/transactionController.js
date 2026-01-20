import axios from 'axios';
import { storage } from '../storage/index.js';

/**
 * Get transactions
 */
export const getTransactions = async (req, res) => {
  try {
    const { userId } = req.user;
    const { accountId, startDate, endDate, limit = 100 } = req.query;

    // Get user's transactions
    const userTransactions = storage.getTransactionsByUser(userId, {
      accountId,
      startDate,
      endDate
    })
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, parseInt(limit));

    res.json({ transactions: userTransactions });
  } catch (error) {
    console.error('Get transactions error:', error);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};

/**
 * Sync transactions from bank
 */
export const syncTransactions = async (req, res) => {
  try {
    const { userId } = req.user;
    const { accountId } = req.body;

    // Find account
    const allAccounts = storage.getBankAccountsByUser(userId);
    const account = allAccounts.find(acc => acc.id === accountId || acc.accountId === accountId);

    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    let fetchedTransactions = [];

    try {
      // Fetch transactions from provider
      if (account.provider === 'razorpayx') {
        const response = await axios.get(
          'https://api.razorpay.com/v1/payments',
          {
            headers: {
              'Authorization': `Bearer ${account.accessToken}`
            },
            params: {
              count: 100,
              // Add date filters if needed
            }
          }
        );

        fetchedTransactions = response.data.items.map(payment => ({
          id: payment.id,
          accountId,
          userId,
          description: payment.description || payment.notes?.description || 'Transaction',
          amount: payment.amount / 100, // Convert from paise to rupees
          type: payment.status === 'captured' ? 'debit' : 'credit',
          date: new Date(payment.created_at * 1000).toISOString().split('T')[0],
          category: 'Other', // Auto-categorize based on description
          syncedAt: new Date().toISOString()
        }));
      } else if (account.provider === 'cashfree') {
        const response = await axios.get(
          'https://api.cashfree.com/pg/orders',
          {
            headers: {
              'Authorization': `Bearer ${account.accessToken}`,
              'x-api-version': '2023-08-01'
            },
            params: {
              count: 100
            }
          }
        );

        fetchedTransactions = response.data.map(order => ({
          id: order.order_id,
          accountId,
          userId,
          description: order.order_note || 'Transaction',
          amount: order.order_amount,
          type: order.payment_status === 'SUCCESS' ? 'debit' : 'credit',
          date: new Date(order.created_at).toISOString().split('T')[0],
          category: 'Other',
          syncedAt: new Date().toISOString()
        }));
      }

      // Store transactions
      fetchedTransactions.forEach(txn => {
        storage.saveTransaction(txn.id, txn);
      });

      res.json({
        success: true,
        count: fetchedTransactions.length,
        transactions: fetchedTransactions
      });
    } catch (error) {
      console.error('Sync error:', error.response?.data || error.message);
      res.status(500).json({
        error: 'Failed to sync transactions',
        message: error.response?.data?.message || error.message
      });
    }
  } catch (error) {
    console.error('Sync transactions error:', error);
    res.status(500).json({ error: 'Failed to sync transactions' });
  }
};

