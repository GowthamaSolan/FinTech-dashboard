import { useState } from 'react'
import { Target, TrendingUp, AlertCircle } from 'lucide-react'
import { formatCurrency } from '../utils/currency'

const categories = [
  'Food',
  'Transportation',
  'Electricity Bill',
  'Shopping',
  'Entertainment',
  'Bills & Utilities',
  'Healthcare',
  'Education',
  'Travel',
  'Other'
]

function BudgetManager({ budgets, expenses, onUpdateBudget }) {
  const [newBudget, setNewBudget] = useState({ category: categories[0], amount: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newBudget.amount || parseFloat(newBudget.amount) <= 0) {
      alert('Please enter a valid budget amount')
      return
    }
    onUpdateBudget(newBudget.category, newBudget.amount)
    setNewBudget({ category: categories[0], amount: '' })
  }

  const getCategorySpending = (category) => {
    return expenses
      .filter(exp => exp.category === category)
      .reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0)
  }

  const getBudgetStatus = (category) => {
    const budget = parseFloat(budgets[category] || 0)
    const spent = getCategorySpending(category)
    const remaining = budget - spent
    const percentage = budget > 0 ? (spent / budget) * 100 : 0
    
    return { budget, spent, remaining, percentage }
  }

  return (
    <div className="budget-manager">
      <div className="budget-form-card">
        <h2 className="card-title">Set Budget</h2>
        <form onSubmit={handleSubmit} className="budget-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="budget-category">Category</label>
              <select
                id="budget-category"
                value={newBudget.category}
                onChange={(e) => setNewBudget({ ...newBudget, category: e.target.value })}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="budget-amount">Amount (₹)</label>
              <input
                type="number"
                id="budget-amount"
                value={newBudget.amount}
                onChange={(e) => setNewBudget({ ...newBudget, amount: e.target.value })}
                placeholder="0"
                step="1"
                min="0"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              <Target size={20} />
              Set Budget
            </button>
          </div>
        </form>
      </div>

      <div className="budget-list-card">
        <h2 className="card-title">Budget Overview</h2>
        {Object.keys(budgets).length === 0 ? (
          <p className="empty-state">No budgets set yet. Create your first budget above!</p>
        ) : (
          <div className="budget-list">
            {Object.entries(budgets).map(([category, budgetAmount]) => {
              const status = getBudgetStatus(category)
              const isOverBudget = status.remaining < 0
              
              return (
                <div key={category} className="budget-item">
                  <div className="budget-header">
                    <h3 className="budget-category">{category}</h3>
                    {isOverBudget && (
                      <span className="over-budget-badge">
                        <AlertCircle size={16} />
                        Over Budget
                      </span>
                    )}
                  </div>
                  <div className="budget-progress">
                    <div className="progress-bar-container">
                      <div
                        className={`progress-bar ${isOverBudget ? 'over' : ''}`}
                        style={{ width: `${Math.min(status.percentage, 100)}%` }}
                      />
                    </div>
                    <div className="budget-stats">
                      <div className="budget-stat">
                        <TrendingUp size={16} />
                        <span>Spent: {formatCurrency(status.spent)}</span>
                      </div>
                      <div className="budget-stat">
                        <Target size={16} />
                        <span>Budget: {formatCurrency(status.budget)}</span>
                      </div>
                      <div className={`budget-stat ${isOverBudget ? 'danger' : 'success'}`}>
                        <span>Remaining: {formatCurrency(status.remaining)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default BudgetManager

