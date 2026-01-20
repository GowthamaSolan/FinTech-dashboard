// In-memory storage (replace with database in production)
// In production, use PostgreSQL, MongoDB, or similar database

export const bankAccounts = new Map();
export const transactions = new Map();

// Helper functions for production database migration
export const storage = {
  // Bank accounts
  saveBankAccount: (id, account) => {
    bankAccounts.set(id, account);
    // In production: await db.bankAccounts.create(account)
  },
  
  getBankAccount: (id) => {
    return bankAccounts.get(id);
    // In production: return await db.bankAccounts.findById(id)
  },
  
  getBankAccountsByUser: (userId) => {
    return Array.from(bankAccounts.values()).filter(acc => acc.userId === userId);
    // In production: return await db.bankAccounts.find({ userId })
  },
  
  deleteBankAccount: (id) => {
    bankAccounts.delete(id);
    // In production: await db.bankAccounts.deleteOne({ id })
  },
  
  // Transactions
  saveTransaction: (id, transaction) => {
    transactions.set(id, transaction);
    // In production: await db.transactions.create(transaction)
  },
  
  getTransactionsByUser: (userId, filters = {}) => {
    return Array.from(transactions.values())
      .filter(txn => {
        if (txn.userId !== userId) return false;
        if (filters.accountId && txn.accountId !== filters.accountId) return false;
        if (filters.startDate && new Date(txn.date) < new Date(filters.startDate)) return false;
        if (filters.endDate && new Date(txn.date) > new Date(filters.endDate)) return false;
        return true;
      });
    // In production: return await db.transactions.find({ userId, ...filters })
  }
};



