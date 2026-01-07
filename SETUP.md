# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Clerk Authentication

1. Go to [https://clerk.com](https://clerk.com) and sign up for a free account
2. Create a new application
3. Copy your **Publishable Key** from the dashboard
4. Create a `.env` file in the root directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

## Step 3: Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Step 4: Test the Application

1. Sign up or sign in using Clerk
2. Add some expenses
3. Set budgets for different categories
4. View the interactive charts
5. Try connecting a bank account (demo mode)

## Troubleshooting

### Clerk Key Error
If you see an error about missing Clerk key:
- Make sure you created a `.env` file
- Check that the key starts with `pk_test_` or `pk_live_`
- Restart the dev server after adding the `.env` file

### Port Already in Use
If port 3000 is busy, Vite will automatically use the next available port. Check the terminal output for the actual URL.

## Next Steps

- Customize the categories in `ExpenseForm.jsx` and `BudgetManager.jsx`
- Add more chart types in `SpendingCharts.jsx`
- Integrate real Plaid API (see README.md for details)
- Add a backend API for data persistence

