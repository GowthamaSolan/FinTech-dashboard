import axios from 'axios';
import { storage } from '../storage/index.js';

/**
 * Connect bank account using RazorpayX or Cashfree
 */
export const connectBank = async (req, res) => {
  try {
    const { userId } = req.user;
    const { provider, authCode, accountType } = req.body;

    // Validate provider
    if (!['razorpayx', 'cashfree'].includes(provider)) {
      return res.status(400).json({ error: 'Invalid provider. Use "razorpayx" or "cashfree"' });
    }

    // Exchange auth code for access token
    let accessToken;
    let accountDetails;

    if (provider === 'razorpayx') {
      // RazorpayX integration
      const response = await axios.post(
        'https://api.razorpay.com/v1/oauth/token',
        {
          grant_type: 'authorization_code',
          code: authCode,
          client_id: process.env.RAZORPAYX_CLIENT_ID,
          client_secret: process.env.RAZORPAYX_CLIENT_SECRET,
          redirect_uri: process.env.RAZORPAYX_REDIRECT_URI
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      accessToken = response.data.access_token;
      
    // Fetch account details
    const accountResponse = await axios.get(
      'https://api.razorpay.com/v1/accounts',
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );

    // Handle RazorpayX response structure
    const accountData = Array.isArray(accountResponse.data) 
      ? accountResponse.data[0] 
      : accountResponse.data;

    accountDetails = {
      institution: accountData.name || accountData.bank_name || 'RazorpayX Account',
      accountType: accountType || 'Savings Account',
      accountNumber: accountData.account_number?.slice(-4) || accountData.masked_account_number?.slice(-4) || '****',
      balance: accountData.balance || accountData.available_balance || 0,
      accountId: accountData.id || accountData.account_id
    };
    } else if (provider === 'cashfree') {
      // Cashfree integration
      const response = await axios.post(
        'https://api.cashfree.com/pg/oauth/token',
        {
          grant_type: 'authorization_code',
          code: authCode,
          client_id: process.env.CASHFREE_CLIENT_ID,
          client_secret: process.env.CASHFREE_CLIENT_SECRET,
          redirect_uri: process.env.CASHFREE_REDIRECT_URI
        },
        {
          headers: {
            'x-api-version': '2023-08-01',
            'Content-Type': 'application/json'
          }
        }
      );

      accessToken = response.data.access_token;
      
      // Fetch account details
      const accountResponse = await axios.get(
        'https://api.cashfree.com/pg/accounts',
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'x-api-version': '2023-08-01'
          }
        }
      );

      accountDetails = {
        institution: accountResponse.data.bank_name || 'Cashfree Account',
        accountType: accountType || 'Savings Account',
        accountNumber: accountResponse.data.account_number?.slice(-4) || '****',
        balance: accountResponse.data.balance || 0,
        accountId: accountResponse.data.account_id
      };
    }

    // Store bank account (in production, save to database)
    const accountId = `acc_${Date.now()}`;
    const accountData = {
      id: accountId,
      userId,
      provider,
      accessToken,
      ...accountDetails,
      connectedAt: new Date().toISOString()
    };
    storage.saveBankAccount(accountId, accountData);

    res.json({
      success: true,
      account: {
        id: accountId,
        ...accountDetails
      }
    });
  } catch (error) {
    console.error('Bank connection error:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to connect bank account',
      message: error.response?.data?.message || error.message
    });
  }
};

/**
 * Disconnect bank account
 */
export const disconnectBank = async (req, res) => {
  try {
    const { accountId } = req.params;
    const { userId } = req.user;

    const account = storage.getBankAccount(accountId);
    
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    if (account.userId !== userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    storage.deleteBankAccount(accountId);
    
    res.json({ success: true, message: 'Bank account disconnected' });
  } catch (error) {
    console.error('Disconnect error:', error);
    res.status(500).json({ error: 'Failed to disconnect account' });
  }
};

/**
 * Get all connected bank accounts
 */
export const getBankAccounts = async (req, res) => {
  try {
    const { userId } = req.user;
    
    const userAccounts = storage.getBankAccountsByUser(userId)
      .map(({ accessToken, ...account }) => account); // Remove sensitive data

    res.json({ accounts: userAccounts });
  } catch (error) {
    console.error('Get accounts error:', error);
    res.status(500).json({ error: 'Failed to fetch accounts' });
  }
};

/**
 * Get bank balance
 */
export const getBankBalance = async (req, res) => {
  try {
    const { accountId } = req.params;
    const { userId } = req.user;

    const account = storage.getBankAccount(accountId);
    
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    if (account.userId !== userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Fetch latest balance from provider
    let balance = account.balance;
    
    try {
      if (account.provider === 'razorpayx') {
        const response = await axios.get(
          `https://api.razorpay.com/v1/accounts/${account.accountId}`,
          {
            headers: {
              'Authorization': `Bearer ${account.accessToken}`
            }
          }
        );
        balance = response.data.balance || balance;
      } else if (account.provider === 'cashfree') {
        const response = await axios.get(
          `https://api.cashfree.com/pg/accounts/${account.accountId}`,
          {
            headers: {
              'Authorization': `Bearer ${account.accessToken}`,
              'x-api-version': '2023-08-01'
            }
          }
        );
        balance = response.data.balance || balance;
      }
    } catch (error) {
      console.error('Balance fetch error:', error);
      // Return cached balance if API fails
    }

    res.json({ balance, currency: 'INR' });
  } catch (error) {
    console.error('Get balance error:', error);
    res.status(500).json({ error: 'Failed to fetch balance' });
  }
};

