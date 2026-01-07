# 💰 FinTech Dashboard

A modern Personal Finance Tracker with Data Visualization built with React, featuring expense tracking, budget management, and interactive charts.

## Features

- 🔐 **Secure Authentication** - Powered by Clerk for user authentication
- 💸 **Expense Tracking** - Add, view, and manage your expenses by category
- 🎯 **Budget Management** - Set budgets for different categories and track your spending
- 📊 **Data Visualization** - Interactive charts showing:
  - Spending by category (Pie Chart)
  - Top spending categories (Bar Chart)
  - Monthly spending trends (Line Chart)
  - Budget vs Actual spending comparison
- 🏦 **Bank Integration** - Connect bank accounts using Plaid API (sandbox mode)
- 💾 **Local Storage** - All data is saved locally per user

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Clerk** - Authentication and user management
- **Recharts** - Beautiful and responsive charts
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Plaid API** - Bank account integration (sandbox)

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fintech-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your Clerk publishable key:
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
```

   To get your Clerk key:
   1. Sign up at [clerk.com](https://clerk.com)
   2. Create a new application
   3. Copy your publishable key from the dashboard

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
fintech-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx          # Main dashboard component
│   │   ├── ExpenseForm.jsx        # Expense input form
│   │   ├── ExpenseList.jsx        # List of expenses
│   │   ├── BudgetManager.jsx      # Budget setting and tracking
│   │   ├── SpendingCharts.jsx     # Data visualization charts
│   │   ├── BankConnection.jsx     # Plaid bank integration
│   │   └── Dashboard.css          # Dashboard styles
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # App styles
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Features in Detail

### Expense Management
- Add expenses with description, amount, category, and date
- View all expenses sorted by date
- Delete expenses
- Categorize expenses for better tracking

### Budget Tracking
- Set monthly budgets for different categories
- Visual progress bars showing budget usage
- Alerts when over budget
- Real-time budget vs actual spending comparison

### Data Visualization
- **Pie Chart**: See spending distribution across categories
- **Bar Chart**: Compare spending in different categories
- **Line Chart**: Track monthly spending trends
- **Budget Comparison**: Visualize budget vs actual spending

### Bank Integration
- Connect bank accounts using Plaid Link
- View account information
- Automatic transaction syncing (simulated in demo)
- Secure OAuth flow

## Plaid Integration Setup

To enable real Plaid integration:

1. Sign up for a Plaid account at [plaid.com](https://plaid.com)
2. Get your API keys from the Plaid Dashboard
3. Install Plaid Link:
```bash
npm install react-plaid-link
```
4. Update `BankConnection.jsx` to use the actual Plaid Link component
5. Set up a backend server to handle Plaid API calls securely

**Note**: The current implementation includes a demo/sandbox mode. For production, you'll need to:
- Set up a backend server to securely handle Plaid API calls
- Store access tokens securely
- Implement webhooks for transaction updates

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Environment Variables

- `VITE_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key (required)

## Data Storage

Currently, all data is stored in the browser's localStorage. Each user's data is isolated by their Clerk user ID. For production, consider:

- Moving to a backend database (PostgreSQL, MongoDB, etc.)
- Implementing API endpoints for CRUD operations
- Adding data synchronization across devices

## Future Enhancements

- [ ] Backend API integration
- [ ] Real-time Plaid transaction syncing
- [ ] Multi-currency support
- [ ] Export data to CSV/PDF
- [ ] Recurring expense tracking
- [ ] Financial goals and savings targets
- [ ] Mobile app version
- [ ] Dark mode support

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

