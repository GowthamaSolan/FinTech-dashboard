import { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { formatCurrencySimple } from '../utils/currency'

const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe', '#43e97b', '#fa709a', '#fee140', '#30cfd0']

function SpendingCharts({ expenses, budgets }) {
  // Category spending data
  const categoryData = useMemo(() => {
    const categoryMap = {}
    expenses.forEach(exp => {
      const category = exp.category
      categoryMap[category] = (categoryMap[category] || 0) + parseFloat(exp.amount || 0)
    })
    
    return Object.entries(categoryMap)
      .map(([name, value]) => ({ name, value: parseFloat(value.toFixed(2)) }))
      .sort((a, b) => b.value - a.value)
  }, [expenses])

  // Monthly spending data
  const monthlyData = useMemo(() => {
    const monthMap = {}
    expenses.forEach(exp => {
      const date = new Date(exp.date)
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
      const monthName = date.toLocaleString('default', { month: 'short', year: 'numeric' })
      monthMap[monthKey] = {
        month: monthName,
        spent: (monthMap[monthKey]?.spent || 0) + parseFloat(exp.amount || 0)
      }
    })
    
    return Object.values(monthMap)
      .sort((a, b) => new Date(a.month) - new Date(b.month))
      .map(item => ({ ...item, spent: parseFloat(item.spent.toFixed(2)) }))
  }, [expenses])

  // Budget vs Actual
  const budgetComparison = useMemo(() => {
    return Object.entries(budgets).map(([category, budget]) => {
      const spent = expenses
        .filter(exp => exp.category === category)
        .reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0)
      
      return {
        category,
        budget: parseFloat(budget),
        spent: parseFloat(spent.toFixed(2))
      }
    })
  }, [budgets, expenses])

  return (
    <div className="charts-container">
      <div className="chart-grid">
        {/* Category Spending Pie Chart */}
        {categoryData.length > 0 && (
          <div className="chart-card">
            <h3 className="chart-title">Spending by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrencySimple(value)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Category Spending Bar Chart */}
        {categoryData.length > 0 && (
          <div className="chart-card">
            <h3 className="chart-title">Top Spending Categories</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrencySimple(value)} />
                <Bar dataKey="value" fill="#667eea" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Monthly Spending Trend */}
        {monthlyData.length > 0 && (
          <div className="chart-card">
            <h3 className="chart-title">Monthly Spending Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrencySimple(value)} />
                <Line type="monotone" dataKey="spent" stroke="#764ba2" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Budget vs Actual */}
        {budgetComparison.length > 0 && (
          <div className="chart-card">
            <h3 className="chart-title">Budget vs Actual Spending</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={budgetComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrencySimple(value)} />
                <Legend />
                <Bar dataKey="budget" fill="#43e97b" name="Budget" />
                <Bar dataKey="spent" fill="#fa709a" name="Spent" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {categoryData.length === 0 && monthlyData.length === 0 && (
          <div className="chart-card">
            <p className="empty-state">No spending data yet. Add expenses to see visualizations!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SpendingCharts

