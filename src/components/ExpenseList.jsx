import { Trash2 } from 'lucide-react'
import { format } from 'date-fns'
import { formatCurrency } from '../utils/currency'

function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="expense-list-card">
        <p className="empty-state">No expenses yet. Add your first expense above!</p>
      </div>
    )
  }

  // Sort expenses by date (newest first)
  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="expense-list-card">
      <h2 className="card-title">Recent Expenses</h2>
      <div className="expense-list">
        {sortedExpenses.map(expense => (
          <div key={expense.id} className="expense-item">
            <div className="expense-info">
              <div className="expense-main">
                <h3 className="expense-description">{expense.description}</h3>
                <span className="expense-category">{expense.category}</span>
              </div>
              <div className="expense-details">
                <p className="expense-date">
                  {format(new Date(expense.date), 'MMM dd, yyyy')}
                </p>
                <p className="expense-amount">{formatCurrency(expense.amount)}</p>
              </div>
            </div>
            <button
              onClick={() => onDeleteExpense(expense.id)}
              className="delete-button"
              aria-label="Delete expense"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpenseList

