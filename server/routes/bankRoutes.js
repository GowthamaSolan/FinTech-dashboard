import express from 'express';
import { connectBank, disconnectBank, getBankAccounts, getBankBalance } from '../controllers/bankController.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(authenticateUser);

// Connect bank account
router.post('/connect', connectBank);

// Disconnect bank account
router.delete('/disconnect/:accountId', disconnectBank);

// Get all connected bank accounts
router.get('/accounts', getBankAccounts);

// Get bank balance
router.get('/balance/:accountId', getBankBalance);

export default router;



