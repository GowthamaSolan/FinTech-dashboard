# 🚀 Quick Start Guide - Step by Step

Follow these steps to get your FinTech Dashboard running!

## Step 1: Open Terminal in Your Project Folder

1. Navigate to your project folder: `C:\Users\Gowthama Solan\Desktop\gowtham\New folder (2)`
2. Open PowerShell or Command Prompt in this folder
   - Right-click in the folder → "Open in Terminal" or "Open PowerShell window here"
   - OR press `Shift + Right-click` → "Open PowerShell window here"

## Step 2: Install Dependencies

In your terminal, run:

```bash
npm install
```

**What this does:** Downloads all the required packages (React, Clerk, Charts, etc.)

**Expected output:** You'll see a progress bar and then "added X packages"

⏱️ **Time:** 2-5 minutes (first time only)

---

## Step 3: Set Up Clerk Authentication (FREE)

### 3.1 Create Clerk Account

1. Go to: https://clerk.com
2. Click **"Sign Up"** (top right)
3. Sign up with Google, GitHub, or email (it's free!)

### 3.2 Create a New Application

1. After signing in, click **"Create Application"**
2. Choose:
   - **Application name:** "FinTech Dashboard" (or any name)
   - **Authentication providers:** Keep default (Email, Google, etc.)
3. Click **"Create Application"**

### 3.3 Get Your Publishable Key

1. In your Clerk dashboard, you'll see **"API Keys"** section
2. Find **"Publishable key"** (starts with `pk_test_`)
3. **Copy this key** (click the copy icon)

### 3.4 Create .env File

1. In your project folder, create a new file named `.env` (no extension!)
2. Open it in a text editor
3. Paste this line (replace with your actual key):

```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

**Important:** Replace `pk_test_your_actual_key_here` with the key you copied from Clerk!

**Example:**
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_abc123xyz789...
```

4. **Save the file**

---

## Step 4: Start the Development Server

In your terminal, run:

```bash
npm run dev
```

**What this does:** Starts the local development server

**Expected output:** You'll see something like:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

---

## Step 5: Open the App in Your Browser

1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Go to: **http://localhost:3000**
3. You should see the FinTech Dashboard login page!

---

## Step 6: Sign Up and Test the App

1. Click **"Sign Up"** or **"Sign In"**
2. Create an account (or sign in if you already have one)
3. You'll be redirected to the dashboard!

### Try These Features:

✅ **Add an Expense:**
   - Go to "Expenses" tab
   - Fill in description, amount, category, date
   - Click "Add Expense"

✅ **Set a Budget:**
   - Go to "Budgets" tab
   - Choose a category
   - Enter an amount
   - Click "Set Budget"

✅ **View Charts:**
   - Go to "Overview" tab
   - See your spending visualized!

✅ **Connect Bank (Demo):**
   - Go to "Bank Link" tab
   - Click "Connect Bank Account"
   - See the demo connection flow

---

## 🎉 You're Done!

Your FinTech Dashboard is now running!

---

## Troubleshooting

### ❌ "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org (download LTS version)

### ❌ "Port 3000 is already in use"
**Solution:** The app will automatically use port 3001 or 3002. Check the terminal for the actual URL.

### ❌ "Missing Publishable Key" error
**Solution:** 
- Make sure `.env` file exists in the project root
- Check the key starts with `pk_test_` or `pk_live_`
- Restart the dev server after creating `.env`

### ❌ Clerk sign-in not working
**Solution:**
- Double-check your publishable key in `.env`
- Make sure you saved the `.env` file
- Restart the dev server: Press `Ctrl+C` then run `npm run dev` again

---

## Next Steps (Optional)

- Customize categories in the code
- Add more features
- Deploy to production (Vercel, Netlify, etc.)
- Integrate real Plaid API

---

## Need Help?

Check the `README.md` file for more detailed information!

