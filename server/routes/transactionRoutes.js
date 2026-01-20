import express from 'express';
import { getTransactions, syncTransactions } from '../controllers/transactionController.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(authenticateUser);

// Get transactions
router.get('/', getTransactions);

// Sync transactions from bank
router.post('/sync', syncTransactions);

export default router;



