import { HelpCircle, Plus, Target, BarChart3, Trash2 } from 'lucide-react'

function Help() {
  return (
    <div className="help-page">
      <div className="help-hero">
        <HelpCircle size={48} />
        <h1>Help & Support</h1>
        <p>Get help with using FinTech Dashboard</p>
      </div>

      <div className="help-content">
        <section className="help-section">
          <h2>Getting Started</h2>
          <div className="help-item">
            <h3>1. Sign Up / Sign In</h3>
            <p>Create an account or sign in using your existing credentials. Your data is securely stored and synced.</p>
          </div>
          <div className="help-item">
            <h3>2. Add Your First Expense</h3>
            <p>Go to the <strong>Expenses</strong> tab and click "Add Expense". Fill in the description, amount, category, and date.</p>
          </div>
          <div className="help-item">
            <h3>3. Set Up Budgets</h3>
            <p>Navigate to the <strong>Budgets</strong> tab to set monthly budgets for different categories like Food, Transportation, etc.</p>
          </div>
          <div className="help-item">
            <h3>4. View Your Analytics</h3>
            <p>Check the <strong>Overview</strong> tab to see beautiful charts and visualizations of your spending patterns.</p>
          </div>
        </section>

        <section className="help-section">
          <h2>Features Guide</h2>
          
          <div className="help-feature">
            <div className="help-feature-icon">
              <Plus size={24} />
            </div>
            <div>
              <h3>Adding Expenses</h3>
              <ul>
                <li>Click on the <strong>Expenses</strong> tab</li>
                <li>Fill in the expense form with description, amount, category, and date</li>
                <li>Click "Add Expense" to save</li>
                <li>Your expenses are automatically saved and categorized</li>
              </ul>
            </div>
          </div>

          <div className="help-feature">
            <div className="help-feature-icon">
              <Target size={24} />
            </div>
            <div>
              <h3>Setting Budgets</h3>
              <ul>
                <li>Go to the <strong>Budgets</strong> tab</li>
                <li>Select a category from the dropdown</li>
                <li>Enter your monthly budget amount</li>
                <li>Click "Set Budget" to save</li>
                <li>Track your spending against budgets with visual progress bars</li>
              </ul>
            </div>
          </div>

          <div className="help-feature">
            <div className="help-feature-icon">
              <BarChart3 size={24} />
            </div>
            <div>
              <h3>Viewing Charts</h3>
              <ul>
                <li>The <strong>Overview</strong> tab shows multiple chart types</li>
                <li>Pie Chart: See spending distribution by category</li>
                <li>Bar Chart: Compare spending across categories</li>
                <li>Line Chart: Track monthly spending trends</li>
                <li>Budget Comparison: Compare actual spending vs budgets</li>
              </ul>
            </div>
          </div>

          <div className="help-feature">
            <div className="help-feature-icon">
              <Trash2 size={24} />
            </div>
            <div>
              <h3>Managing Expenses</h3>
              <ul>
                <li>View all your expenses in the Expenses tab</li>
                <li>Expenses are sorted by date (newest first)</li>
                <li>Click the delete icon to remove an expense</li>
                <li>All changes are saved automatically</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="help-section">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-item">
            <h3>Q: Is my data secure?</h3>
            <p>A: Yes! Your data is stored locally in your browser and is encrypted. We use Clerk for secure authentication.</p>
          </div>

          <div className="faq-item">
            <h3>Q: Can I export my data?</h3>
            <p>A: Currently, data is stored locally. You can access it through your browser's developer tools, but export functionality is coming soon!</p>
          </div>

          <div className="faq-item">
            <h3>Q: How do I change categories?</h3>
            <p>A: Categories are predefined for consistency. We're working on custom categories in a future update.</p>
          </div>

          <div className="faq-item">
            <h3>Q: Can I use this on mobile?</h3>
            <p>A: Yes! The app is fully responsive and works great on mobile devices, tablets, and desktops.</p>
          </div>

          <div className="faq-item">
            <h3>Q: How do I enable dark mode?</h3>
            <p>A: Click the theme toggle button in the top navigation bar to switch between light and dark modes.</p>
          </div>
        </section>

        <section className="help-section">
          <h2>Need More Help?</h2>
          <p>If you have additional questions or need support, please contact us or check the documentation.</p>
          <div className="help-contact">
            <HelpCircle size={24} />
            <span>For technical support, please refer to the documentation or create an issue on GitHub.</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Help

