import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY || PUBLISHABLE_KEY === "pk_test_your_key_here") {
  // Show helpful error message instead of crashing
  ReactDOM.createRoot(document.getElementById('root')).render(
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      color: 'white'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '2rem',
        borderRadius: '1rem',
        maxWidth: '600px',
        color: '#1f2937'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔑 Clerk Key Required</h1>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          To use this app, you need to set up Clerk authentication.
        </p>
        <ol style={{ marginLeft: '1.5rem', lineHeight: '2' }}>
          <li>Create a <code style={{ background: '#e5e7eb', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>.env</code> file in your project root</li>
          <li>Get your Clerk key from <a href="https://clerk.com" target="_blank" style={{ color: '#667eea' }}>clerk.com</a></li>
          <li>Add this line to <code style={{ background: '#e5e7eb', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>.env</code>:</li>
        </ol>
        <div style={{
          background: '#f3f4f6',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginTop: '1rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem'
        }}>
          VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
          See <strong>HOW_TO_GET_CLERK_KEY.md</strong> for detailed instructions.
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
          After adding the key, restart the dev server (Ctrl+C then npm run dev).
        </p>
      </div>
    </div>
  )
} else {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ErrorBoundary>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      </ErrorBoundary>
    </React.StrictMode>,
  )
}

