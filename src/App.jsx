import { useState } from 'react'
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Help from './components/Help'
import PrivacyPolicy from './components/PrivacyPolicy'
import Logo from './components/Logo'
import { Menu, X, Moon, Sun, Info, HelpCircle, Shield, Home } from 'lucide-react'
import './App.css'

function AppContent() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'help', label: 'Help', icon: HelpCircle },
    { id: 'privacy', label: 'Privacy', icon: Shield },
  ]

  return (
    <div className="App">
      <SignedOut>
        <div className="sign-in-container">
          <div className="sign-in-card">
            <div className="logo-container">
              <Logo size="xlarge" className="logo-main" />
              <h1 className="app-title">FinTech Dashboard</h1>
            </div>
            <p className="app-subtitle">Track your expenses, set budgets, and visualize your spending</p>
            <SignIn />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="app-header">
          <div className="header-left">
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Logo size="default" className="header-logo" />
            <h1 className="app-title">FinTech Dashboard</h1>
          </div>
          <div className="header-right">
            <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <div className="user-button-wrapper">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>

        {menuOpen && (
          <nav className="main-nav">
            {navigation.map(item => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id)
                    setMenuOpen(false)
                  }}
                  className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>
        )}

        <main className="main-content">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'about' && <About />}
          {currentPage === 'help' && <Help />}
          {currentPage === 'privacy' && <PrivacyPolicy />}
        </main>
      </SignedIn>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App

