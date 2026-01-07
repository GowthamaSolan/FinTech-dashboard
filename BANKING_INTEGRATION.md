# 🏦 Real Banking Integration Guide

This guide explains how to set up real banking integration for production using Indian banking APIs.

## 📋 Prerequisites

1. **Backend Server**: Node.js backend (already created in `/server` folder)
2. **API Provider Account**: Sign up for RazorpayX or Cashfree
3. **Environment Variables**: Configure API keys
4. **OAuth Setup**: Configure redirect URIs

---

## 🚀 Step-by-Step Setup

### Step 1: Choose Your Provider

#### Option A: RazorpayX
- **Website**: https://razorpay.com
- **Documentation**: https://razorpay.com/docs/x/
- **Best for**: Comprehensive banking solutions, account aggregation

#### Option B: Cashfree
- **Website**: https://cashfree.com
- **Documentation**: https://docs.cashfree.com
- **Best for**: Payment gateway with banking features

---

### Step 2: Sign Up and Get API Credentials

#### For RazorpayX:
1. Go to https://dashboard.razorpay.com
2. Sign up for a RazorpayX account
3. Navigate to **Settings** → **API Keys**
4. Create a new API key pair
5. Copy:
   - **Client ID** (starts with `rzp_`)
   - **Client Secret** (starts with `rzp_`)

#### For Cashfree:
1. Go to https://www.cashfree.com
2. Sign up and verify your account
3. Navigate to **Developers** → **API Credentials**
4. Copy:
   - **Client ID**
   - **Client Secret**

---

### Step 3: Configure Backend Server

1. **Navigate to server folder**:
   ```bash
   cd server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create `.env` file** (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. **Edit `.env` file** with your credentials:
   ```env
   # RazorpayX
   RAZORPAYX_CLIENT_ID=your_client_id_here
   RAZORPAYX_CLIENT_SECRET=your_client_secret_here
   RAZORPAYX_REDIRECT_URI=http://localhost:5000/api/bank/callback/razorpayx

   # OR Cashfree
   CASHFREE_CLIENT_ID=your_client_id_here
   CASHFREE_CLIENT_SECRET=your_client_secret_here
   CASHFREE_REDIRECT_URI=http://localhost:5000/api/bank/callback/cashfree
   ```

5. **Start the backend server**:
   ```bash
   npm run dev
   ```

---

### Step 4: Configure Frontend

1. **Update `.env` file in root** (add API URL):
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_RAZORPAYX_CLIENT_ID=your_client_id_here
   VITE_RAZORPAYX_REDIRECT_URI=http://localhost:3000/bank/callback
   ```

2. **Restart frontend dev server**:
   ```bash
   npm run dev
   ```

---

### Step 5: Set Up OAuth Redirect URIs

#### In RazorpayX Dashboard:
1. Go to **Settings** → **OAuth Applications**
2. Add redirect URI: `http://localhost:3000/bank/callback`
3. Save changes

#### In Cashfree Dashboard:
1. Go to **Developers** → **OAuth Settings**
2. Add redirect URI: `http://localhost:3000/bank/callback`
3. Save changes

---

### Step 6: Handle OAuth Callback

Create a callback handler in your frontend:

```javascript
// src/pages/BankCallback.jsx
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { bankAPI } from '../utils/api';

export default function BankCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');
  const provider = searchParams.get('provider') || 'razorpayx';

  useEffect(() => {
    const connectAccount = async () => {
      try {
        await bankAPI.connect(provider, code, 'Savings Account');
        navigate('/dashboard?tab=bank');
      } catch (error) {
        console.error('Connection failed:', error);
        navigate('/dashboard?tab=bank&error=' + encodeURIComponent(error.message));
      }
    };

    if (code) {
      connectAccount();
    }
  }, [code, provider, navigate]);

  return <div>Connecting your bank account...</div>;
}
```

---

## 🔒 Security Considerations

### 1. **Never Expose Secrets**
- ✅ Keep API secrets in backend `.env` file
- ❌ Never commit `.env` to git
- ✅ Use environment variables in production

### 2. **Token Storage**
- Store access tokens securely (encrypted database)
- Implement token refresh mechanism
- Set token expiration handling

### 3. **HTTPS in Production**
- Always use HTTPS in production
- Update redirect URIs to use HTTPS
- Use secure cookies for sessions

### 4. **Rate Limiting**
- Implement rate limiting on API endpoints
- Monitor API usage
- Handle API errors gracefully

---

## 📊 API Endpoints

### Backend Endpoints:

- `POST /api/bank/connect` - Connect bank account
- `DELETE /api/bank/disconnect/:accountId` - Disconnect account
- `GET /api/bank/accounts` - Get all connected accounts
- `GET /api/bank/balance/:accountId` - Get account balance
- `GET /api/transactions` - Get transactions
- `POST /api/transactions/sync` - Sync transactions

---

## 🧪 Testing

### Test Mode:
1. Use sandbox/test credentials from provider
2. Test with demo bank accounts
3. Verify OAuth flow works
4. Test transaction syncing

### Production Checklist:
- [ ] API credentials configured
- [ ] OAuth redirect URIs set
- [ ] HTTPS enabled
- [ ] Environment variables set
- [ ] Database configured (if using)
- [ ] Error handling implemented
- [ ] Logging configured
- [ ] Rate limiting enabled

---

## 🐛 Troubleshooting

### Issue: "Invalid redirect URI"
**Solution**: Check that redirect URI in dashboard matches exactly (including http/https, port, path)

### Issue: "Invalid client credentials"
**Solution**: Verify API keys are correct and not expired

### Issue: "CORS error"
**Solution**: Update `FRONTEND_URL` in backend `.env` to match your frontend URL

### Issue: "Token expired"
**Solution**: Implement token refresh logic in backend

---

## 📚 Additional Resources

- **RazorpayX Docs**: https://razorpay.com/docs/x/
- **Cashfree Docs**: https://docs.cashfree.com
- **RBI Guidelines**: https://www.rbi.org.in (for compliance)

---

## 🚢 Deployment

### Backend Deployment (Example: Railway/Render):
1. Push code to repository
2. Set environment variables in hosting platform
3. Deploy backend
4. Update frontend API URL to production backend URL

### Frontend Deployment (Example: Vercel/Netlify):
1. Set environment variables
2. Build and deploy
3. Update OAuth redirect URIs to production URLs

---

## ✅ Next Steps

1. ✅ Set up provider account
2. ✅ Configure API credentials
3. ✅ Test OAuth flow
4. ✅ Implement transaction syncing
5. ✅ Add error handling
6. ✅ Deploy to production

---

**Need Help?** Check the provider documentation or contact their support team.



