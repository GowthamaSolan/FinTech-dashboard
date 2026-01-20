import { Shield, Lock, Eye, FileText } from 'lucide-react'

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <Shield size={48} />
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us</p>
      </div>

      <div className="privacy-content">
        <section className="privacy-section">
          <h2>Last Updated: {new Date().toLocaleDateString()}</h2>
          <p>
            This Privacy Policy describes how FinTech Dashboard ("we", "our", or "us") 
            collects, uses, and protects your personal information when you use our application.
          </p>
        </section>

        <section className="privacy-section">
          <div className="privacy-icon">
            <FileText size={24} />
          </div>
          <h2>Information We Collect</h2>
          <div className="privacy-item">
            <h3>Account Information</h3>
            <p>
              When you sign up, we collect your email address and authentication information 
              through Clerk, our authentication provider. This information is used solely for 
              account management and authentication purposes.
            </p>
          </div>
          <div className="privacy-item">
            <h3>Financial Data</h3>
            <p>
              All financial data (expenses, budgets, transactions) is stored locally in your 
              browser's localStorage. This data never leaves your device and is not transmitted 
              to our servers or any third parties.
            </p>
          </div>
          <div className="privacy-item">
            <h3>Usage Data</h3>
            <p>
              We may collect anonymous usage statistics to improve the application. This does not 
              include any personal or financial information.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <div className="privacy-icon">
            <Lock size={24} />
          </div>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To authenticate and manage your account</li>
            <li>To improve user experience</li>
            <li>To analyze usage patterns (anonymously)</li>
          </ul>
        </section>

        <section className="privacy-section">
          <div className="privacy-icon">
            <Shield size={24} />
          </div>
          <h2>Data Security</h2>
          <p>
            We take data security seriously. Your financial data is stored locally on your device 
            using browser localStorage, which means:
          </p>
          <ul>
            <li>Your data never leaves your device</li>
            <li>No servers store your financial information</li>
            <li>Authentication is handled securely through Clerk</li>
            <li>All data transmission is encrypted (HTTPS)</li>
          </ul>
        </section>

        <section className="privacy-section">
          <div className="privacy-icon">
            <Eye size={24} />
          </div>
          <h2>Data Sharing</h2>
          <p>
            We do not sell, trade, or share your personal or financial information with third parties. 
            The only exception is:
          </p>
          <ul>
            <li><strong>Clerk Authentication:</strong> We use Clerk for secure authentication. 
            Please refer to Clerk's privacy policy for their data handling practices.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your data (stored locally in your browser)</li>
            <li>Delete your data (clear browser localStorage)</li>
            <li>Delete your account (through Clerk dashboard)</li>
            <li>Opt out of anonymous usage tracking</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Cookies and Local Storage</h2>
          <p>
            We use browser localStorage to store your financial data and preferences. 
            This is necessary for the application to function. No tracking cookies are used.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Children's Privacy</h2>
          <p>
            Our service is not intended for children under 13. We do not knowingly collect 
            personal information from children under 13.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through 
            the application or refer to the documentation.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy

