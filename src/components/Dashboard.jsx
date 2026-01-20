import { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import BudgetManager from './BudgetManager'
import SpendingCharts from './SpendingCharts'
import { Wallet, TrendingUp, Target } from 'lucide-react'
import { formatCurrency } from '../utils/currency'
import './Dashboard.css'

function Dashboard() {
  const { user } = useUser()
  const [expenses, setExpenses] = useState([])
  const [budgets, setBudgets] = useState({})
  const [activeTab, setActiveTab] = useState('overview')

  // Load data from localStorage
  useEffect(() => {
    const savedExpenses = localStorage.getItem(`expenses_${user?.id}`)
    const savedBudgets = localStorage.getItem(`budgets_${user?.id}`)
    
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses))
    } else {
      // Add sample expenses for new users
      const sampleExpenses = [
        {
          id: 1,
          description: 'Metro ticket',
          amount: 50,
          category: 'Transportation',
          date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        },
        {
          id: 2,
          description: 'Grocery shopping',
          amount: 2500,
          category: 'Food',
          date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        },
        {
          id: 3,
          description: 'Electricity bill payment',
          amount: 3500,
          category: 'Electricity Bill',
          date: new Date().toISOString().split('T')[0]
        }
      ]
      setExpenses(sampleExpenses)
    }
    
    if (savedBudgets) {
      setBudgets(JSON.parse(savedBudgets))
    } else {
      // Add sample budgets for new users
      const sampleBudgets = {
        'Food': 10000,
        'Transportation': 3000,
        'Electricity Bill': 5000
      }
      setBudgets(sampleBudgets)
    }
  }, [user?.id])

  // Save expenses to localStorage
  useEffect(() => {
    if (user?.id) {
      localStorage.setItem(`expenses_${user.id}`, JSON.stringify(expenses))
    }
  }, [expenses, user?.id])

  // Save budgets to localStorage
  useEffect(() => {
    if (user?.id) {
      localStorage.setItem(`budgets_${user.id}`, JSON.stringify(budgets))
    }
  }, [budgets, user?.id])

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id))
  }

  const updateBudget = (category, amount) => {
    setBudgets({ ...budgets, [category]: parseFloat(amount) })
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'expenses', label: 'Expenses', icon: Wallet },
    { id: 'budgets', label: 'Budgets', icon: Target },
  ]

  // Calculate totals
  const totalSpent = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0)
  const totalBudget = Object.values(budgets).reduce((sum, budget) => sum + parseFloat(budget || 0), 0)
  const remainingBudget = totalBudget - totalSpent

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon income">
              <TrendingUp size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Total Spent</p>
              <p className="stat-value">{formatCurrency(totalSpent)}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon budget">
              <Target size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Total Budget</p>
              <p className="stat-value">{formatCurrency(totalBudget)}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className={`stat-icon ${remainingBudget >= 0 ? 'success' : 'danger'}`}>
              <Wallet size={24} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Remaining</p>
              <p className="stat-value">{formatCurrency(remainingBudget)}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <SpendingCharts expenses={expenses} budgets={budgets} />
            </div>
          )}
          
          {activeTab === 'expenses' && (
            <div className="expenses-content">
              <ExpenseForm onAddExpense={addExpense} />
              <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
            </div>
          )}
          
          {activeTab === 'budgets' && (
            <div className="budgets-content">
              <BudgetManager budgets={budgets} expenses={expenses} onUpdateBudget={updateBudget} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

