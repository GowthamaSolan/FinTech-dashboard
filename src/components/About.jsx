import { Wallet, TrendingUp, Target, BarChart3, Shield, Zap } from 'lucide-react'
import Logo from './Logo'

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <Logo size="xlarge" className="about-logo" />
        <h1>FinTech Dashboard</h1>
        <p className="about-subtitle">Your Personal Finance Tracker</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>About This App</h2>
          <p>
            FinTech Dashboard is a modern, intuitive personal finance management application 
            designed to help you take control of your finances. Track expenses, set budgets, 
            and visualize your spending patterns with beautiful, interactive charts.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Wallet size={32} />
              <h3>Expense Tracking</h3>
              <p>Easily add and categorize your expenses. Keep track of every rupee you spend.</p>
            </div>
            <div className="feature-card">
              <Target size={32} />
              <h3>Budget Management</h3>
              <p>Set budgets for different categories and track your spending against them.</p>
            </div>
            <div className="feature-card">
              <BarChart3 size={32} />
              <h3>Data Visualization</h3>
              <p>Beautiful charts and graphs to visualize your spending patterns and trends.</p>
            </div>
            <div className="feature-card">
              <TrendingUp size={32} />
              <h3>Spending Insights</h3>
              <p>Get insights into your spending habits and identify areas for improvement.</p>
            </div>
            <div className="feature-card">
              <Shield size={32} />
              <h3>Secure & Private</h3>
              <p>Your financial data is stored locally and securely. Your privacy is our priority.</p>
            </div>
            <div className="feature-card">
              <Zap size={32} />
              <h3>Fast & Responsive</h3>
              <p>Lightning-fast performance with a modern, responsive design that works everywhere.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Technology Stack</h2>
          <div className="tech-stack">
            <div className="tech-item">React</div>
            <div className="tech-item">Vite</div>
            <div className="tech-item">Clerk Authentication</div>
            <div className="tech-item">Recharts</div>
            <div className="tech-item">Tailwind CSS</div>
            <div className="tech-item">Lucide Icons</div>
          </div>
        </section>

        <section className="about-section">
          <h2>Version</h2>
          <p>FinTech Dashboard v1.0.0</p>
          <p className="about-note">Built with ❤️ for better financial management</p>
        </section>
      </div>
    </div>
  )
}

export default About

