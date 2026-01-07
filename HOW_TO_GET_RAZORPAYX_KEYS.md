# 🔑 How to Get RazorpayX API Keys - Step by Step

## Step 1: Sign Up for RazorpayX

1. **Go to Razorpay Website**
   - Visit: **https://razorpay.com**
   - Click **"Sign Up"** (top right corner)

2. **Create Your Account**
   - Enter your email address
   - Create a password
   - Verify your email
   - Complete business details (company name, type, etc.)

3. **Complete KYC Verification**
   - Provide business documents
   - Complete bank account verification
   - Wait for approval (usually 1-2 business days)

---

## Step 2: Access the Dashboard

1. **Login to Dashboard**
   - Go to: **https://dashboard.razorpay.com**
   - Sign in with your credentials

2. **Navigate to Settings**
   - Click on **"Settings"** in the left sidebar
   - Or go directly to: **https://dashboard.razorpay.com/app/settings**

---

## Step 3: Get API Keys

### Option A: For RazorpayX (Banking/Account Aggregation)

1. **Go to API Keys Section**
   - In Settings, click on **"API Keys"** tab
   - Or navigate to: **https://dashboard.razorpay.com/app/keys**

2. **Create New API Key**
   - Click **"Generate Key"** or **"Create API Key"**
   - Select **"RazorpayX"** (if you have access)
   - Give it a name (e.g., "FinTech Dashboard")
   - Click **"Generate"**

3. **Copy Your Keys**
   - **Key ID** (starts with `rzp_` or `rzpx_`) ← This is your Client ID
   - **Key Secret** (starts with `rzp_` or `rzpx_`) ← This is your Client Secret
   - ⚠️ **IMPORTANT**: Copy the secret immediately - you can only see it once!

### Option B: For Razorpay Payment Gateway (Alternative)

If RazorpayX is not available, you can use regular Razorpay:

1. **Go to API Keys**
   - Settings → API Keys
   - Click **"Generate Key"**
   - Select **"Test"** mode for development
   - Copy **Key ID** and **Key Secret**

---

## Step 4: Set Up OAuth (For Bank Connections)

1. **Go to OAuth Applications**
   - Navigate to: **Settings** → **OAuth Applications**
   - Or: **https://dashboard.razorpay.com/app/oauth**

2. **Create OAuth Application**
   - Click **"Create Application"** or **"Add Application"**
   - Fill in:
     - **Application Name**: FinTech Dashboard
     - **Redirect URI**: `http://localhost:3000/bank/callback` (for development)
     - **Scopes**: Select `read` and `accounts` permissions
   - Click **"Create"**

3. **Copy OAuth Credentials**
   - **Client ID** (for OAuth)
   - **Client Secret** (for OAuth)
   - Note: These are different from API keys!

---

## Step 5: Add Keys to Your Project

### Backend `.env` file:
```env
# RazorpayX API Keys (for account operations)
RAZORPAYX_CLIENT_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAYX_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxx

# OAuth Redirect URI
RAZORPAYX_REDIRECT_URI=http://localhost:5000/api/bank/callback/razorpayx
```

### Frontend `.env` file:
```env
# OAuth Client ID (for frontend OAuth flow)
VITE_RAZORPAYX_CLIENT_ID=rzp_test_xxxxxxxxxxxxx
VITE_RAZORPAYX_REDIRECT_URI=http://localhost:3000/bank/callback
```

---

## 📍 Direct Links

- **Dashboard**: https://dashboard.razorpay.com
- **API Keys**: https://dashboard.razorpay.com/app/keys
- **OAuth Apps**: https://dashboard.razorpay.com/app/oauth
- **Documentation**: https://razorpay.com/docs/x/

---

## 🔍 What Each Key is For

| Key Type | Where to Find | Used For |
|----------|---------------|----------|
| **API Key ID** | Settings → API Keys | Backend API calls |
| **API Key Secret** | Settings → API Keys | Backend API calls |
| **OAuth Client ID** | Settings → OAuth Apps | Frontend OAuth flow |
| **OAuth Client Secret** | Settings → OAuth Apps | Backend OAuth token exchange |

---

## ⚠️ Important Notes

1. **Test vs Live Mode**
   - Use **Test** keys for development
   - Use **Live** keys for production
   - Test keys start with `rzp_test_`
   - Live keys start with `rzp_live_`

2. **Security**
   - ❌ Never commit keys to git
   - ✅ Always use `.env` files
   - ✅ Add `.env` to `.gitignore`
   - ✅ Rotate keys if compromised

3. **RazorpayX Availability**
   - RazorpayX requires business verification
   - May not be available in all regions
   - Contact Razorpay support if you don't see RazorpayX options

---

## 🆘 Troubleshooting

### "I don't see RazorpayX option"
**Solution**: 
- RazorpayX requires business account approval
- Complete KYC verification first
- Contact Razorpay support: support@razorpay.com

### "I can't find OAuth section"
**Solution**:
- OAuth might be under "Developers" or "Integrations"
- Check if your account has OAuth access
- Some features require higher plan

### "Keys not working"
**Solution**:
- Verify you're using correct environment (test/live)
- Check key format (should start with `rzp_`)
- Ensure keys are copied completely (no spaces)
- Check if account is activated

---

## 📞 Need Help?

- **Razorpay Support**: support@razorpay.com
- **Documentation**: https://razorpay.com/docs/
- **Community**: https://razorpay.com/support/

---

## ✅ Quick Checklist

- [ ] Signed up for Razorpay account
- [ ] Completed KYC verification
- [ ] Generated API keys
- [ ] Created OAuth application
- [ ] Copied all credentials
- [ ] Added keys to `.env` files
- [ ] Tested connection

---

**Ready to connect!** Once you have your keys, follow the `BANKING_INTEGRATION.md` guide to complete the setup.

