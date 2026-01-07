# 🔑 How to Get Your Clerk Key - Step by Step

## Method 1: Quick Setup (Recommended)

### Step 1: Go to Clerk Website
1. Open your browser
2. Visit: **https://clerk.com**
3. Click **"Sign Up"** (top right corner)

### Step 2: Create Your Account
You can sign up with:
- **Google** (fastest)
- **GitHub**
- **Email** (create a new account)

Choose any method - they're all free!

### Step 3: Create a New Application
1. After signing in, you'll see the Clerk Dashboard
2. Click the big **"Create Application"** button (or "New Application")
3. Fill in:
   - **Application name:** `FinTech Dashboard` (or any name you like)
   - **Authentication providers:** Keep the defaults (Email, Google, etc.)
4. Click **"Create Application"**

### Step 4: Find Your Publishable Key
1. After creating the app, you'll be in the dashboard
2. Look for the **"API Keys"** section (usually on the left sidebar or main page)
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`) ← **YOU NEED THIS ONE**
   - Secret key (starts with `sk_test_`) ← Don't use this one
4. Click the **copy icon** (📋) next to the **Publishable key**
5. The key looks like: `pk_test_abc123xyz789...`

### Step 5: Add It to Your .env File
1. Open your `.env` file in your project folder
2. Replace `pk_test_your_key_here` with the key you just copied
3. Save the file

**Example:**
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_2N2bK8mP9qR5tV7wX3yZ6aB4cD1eF8gH2jK5lM9nP3qR6sT8vW1xY4zA7bC0dE
```

---

## Method 2: If You Already Have a Clerk Account

1. Go to **https://dashboard.clerk.com**
2. Sign in
3. Select your application (or create a new one)
4. Go to **"API Keys"** in the sidebar
5. Copy the **Publishable key**

---

## Visual Guide (What You'll See)

### Clerk Dashboard Layout:
```
┌─────────────────────────────────────┐
│  Clerk Dashboard                    │
├─────────────────────────────────────┤
│                                     │
│  [Your Application Name]            │
│                                     │
│  Sidebar:                           │
│  • Overview                         │
│  • Users                            │
│  • API Keys  ← CLICK HERE           │
│  • Sessions                         │
│  • Webhooks                         │
│                                     │
└─────────────────────────────────────┘
```

### API Keys Page:
```
┌─────────────────────────────────────┐
│  API Keys                            │
├─────────────────────────────────────┤
│                                     │
│  Publishable key                    │
│  ┌───────────────────────────────┐  │
│  │ pk_test_abc123xyz789...  [📋] │  │ ← COPY THIS
│  └───────────────────────────────┘  │
│                                     │
│  Secret key                         │
│  ┌───────────────────────────────┐  │
│  │ sk_test_xyz789abc123...       │  │ ← Don't use
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

---

## Common Questions

### ❓ "I don't see API Keys section"
- Look in the left sidebar menu
- It might be under "Configure" or "Settings"
- Try clicking on your application name first

### ❓ "Which key do I use?"
- Use the **Publishable key** (starts with `pk_test_`)
- **Never** use the Secret key (starts with `sk_test_`)

### ❓ "What's the difference between pk_test_ and pk_live_?"
- `pk_test_` = Test/Development key (use this for now)
- `pk_live_` = Production key (use this when you deploy)

### ❓ "Is it free?"
- Yes! Clerk has a generous free tier
- Perfect for development and small projects

### ❓ "I copied the key, now what?"
1. Open your `.env` file
2. Paste the key after the `=` sign
3. Save the file
4. Run `npm run dev`

---

## Quick Copy-Paste Template

Once you have your key, your `.env` file should look like this:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY_HERE
```

**Just replace `YOUR_ACTUAL_KEY_HERE` with the key you copied from Clerk!**

---

## ✅ Verification

After adding your key:
1. Save the `.env` file
2. Run `npm run dev`
3. Open http://localhost:3000
4. You should see the Clerk sign-in page (not an error!)

If you see an error about the key, double-check:
- The key starts with `pk_test_`
- There are no extra spaces
- The `.env` file is in the root folder (same level as package.json)

---

## 🆘 Still Having Trouble?

1. **Make sure you're logged into Clerk dashboard**
2. **Check you selected the correct application**
3. **Look for "Publishable" not "Secret"**
4. **The key should be very long (50+ characters)**

Need more help? Check the Clerk docs: https://clerk.com/docs

