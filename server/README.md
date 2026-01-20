# FinTech Dashboard Backend Server

Backend server for real banking integration with Indian banks.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your API credentials

# Start development server
npm run dev

# Start production server
npm start
```

## Environment Variables

See `.env.example` for all required variables.

## API Endpoints

- `GET /health` - Health check
- `POST /api/bank/connect` - Connect bank account
- `DELETE /api/bank/disconnect/:accountId` - Disconnect account
- `GET /api/bank/accounts` - Get connected accounts
- `GET /api/bank/balance/:accountId` - Get balance
- `GET /api/transactions` - Get transactions
- `POST /api/transactions/sync` - Sync transactions

## Production Setup

1. Set all environment variables
2. Use a production database (PostgreSQL recommended)
3. Enable HTTPS
4. Set up proper authentication with Clerk
5. Implement rate limiting
6. Add logging and monitoring

See `BANKING_INTEGRATION.md` for detailed setup instructions.



