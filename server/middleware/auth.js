import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate users
 * In production, verify Clerk session token here
 */
export const authenticateUser = (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    
    // Verify token (in production, verify with Clerk)
    // For now, we'll use a simple JWT verification
    // Replace this with Clerk's token verification in production
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

/**
 * Get user ID from Clerk token
 * This should be replaced with actual Clerk verification
 */
export const getUserIdFromToken = (token) => {
  try {
    const decoded = jwt.decode(token);
    return decoded?.userId || decoded?.sub || 'anonymous';
  } catch {
    return 'anonymous';
  }
};



