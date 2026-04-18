import React from 'react'
import '../profile/profile.css'
import './billing.css'

const invoices = [
  { month: 'April, 2024', amount: '$450' },
  { month: 'March, 2024', amount: '$320' },
  { month: 'February, 2024', amount: '$480' },
]

const transactions = [
  { title: 'Netflix', subtitle: 'Subscription', amount: '- $15.99', tone: 'expense' },
  { title: 'Apple', subtitle: 'App Store', amount: '- $56.99', tone: 'expense' },
  { title: 'Salary', subtitle: 'March payment', amount: '+ $2,500', tone: 'income' },
  { title: 'Spotify', subtitle: 'Monthly plan', amount: '- $9.99', tone: 'expense' },
  { title: 'Amazon', subtitle: 'Online order', amount: '- $120.00', tone: 'expense' },
]

function Billing({ onSwitch }) {
  return (
    <div className="profile-layout">
      <aside className="profile-sidebar">
        <div className="profile-brand">
          <div className="brand-mark">P</div>
          <div>
            <p>Purity UI Dashboard</p>
          </div>
        </div>

        <nav className="profile-nav">
          <button type="button" onClick={() => onSwitch('dashboard')}>
            <span>D</span>
            Dashboard
          </button>
          <button type="button" onClick={() => onSwitch('table')}>
            <span>T</span>
            Tables
          </button>
          <button type="button" className="active" onClick={() => onSwitch('billing')}>
            <span>B</span>
            Billing
          </button>
          <button type="button" onClick={() => onSwitch('profile')}>
            <span>R</span>
            RTL
          </button>
        </nav>

        <div className="profile-nav-label">Account Pages</div>

        <nav className="profile-nav secondary">
          <button type="button" onClick={() => onSwitch('profile')}>
            <span>P</span>
            Profile
          </button>
          <button type="button" onClick={() => onSwitch('sign')}>
            <span>S</span>
            Sign In
          </button>
          <button type="button" onClick={() => onSwitch('signup')}>
            <span>U</span>
            Sign Up
          </button>
        </nav>

        <div className="profile-help">
          <div className="help-badge">?</div>
          <h4>Need help?</h4>
          <p>Review cards, invoices and transactions with the same clean dashboard style.</p>
          <button type="button">Documentation</button>
        </div>
      </aside>

      <main className="profile-main">
        <header className="profile-topbar">
          <div>
            <p className="profile-breadcrumb">Pages / Billing</p>
            <h1>Billing</h1>
          </div>

          <div className="profile-top-actions">
            <label className="profile-search">
              <span>Q</span>
              <input type="text" placeholder="Search" />
            </label>
            <button type="button" onClick={() => onSwitch('profile')}>
              Account
            </button>
          </div>
        </header>

        <section className="billing-grid">
          <article className="billing-card feature-card">
            <div className="card-top">
              <span>Virtual Card</span>
              <span>•••</span>
            </div>
            <div className="card-number">7812 2138 6923 XXXX</div>
            <div className="card-meta">
              <div>
                <span>Card Holder</span>
                <strong>Esthera Jackson</strong>
              </div>
              <div>
                <span>Expires</span>
                <strong>12/24</strong>
              </div>
            </div>
            <div className="card-balance">
              <span>Balance</span>
              <strong>$14,280</strong>
            </div>
          </article>

          <div className="billing-side-grid">
            <article className="billing-card mini">
              <span className="mini-label">Salary</span>
              <strong>$2,500</strong>
              <p>Bank account balance</p>
            </article>
            <article className="billing-card mini">
              <span className="mini-label">PayPal</span>
              <strong>$4,300</strong>
              <p>Available funds</p>
            </article>

            <article className="billing-card invoice-card">
              <div className="section-head">
                <h3>Invoices</h3>
                <button type="button">View all</button>
              </div>

              <div className="invoice-list">
                {invoices.map((invoice) => (
                  <div className="invoice-row" key={invoice.month}>
                    <span>{invoice.month}</span>
                    <strong>{invoice.amount}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="billing-detail-grid">
          <article className="billing-card info-card">
            <div className="section-head">
              <h3>Billing Information</h3>
              <button type="button">Manage</button>
            </div>

            <div className="info-grid billing-info-grid">
              <div>
                <span>Company</span>
                <strong>Creative Tim</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>support@creative-tim.com</strong>
              </div>
              <div>
                <span>VAT Number</span>
                <strong>FRB1235476</strong>
              </div>
            </div>

            <div className="billing-stack">
              <div className="billing-note">
                All transactions are secured and encrypted. Your billing information is safe.
              </div>
              <div className="billing-line-item">
                <span>Billing Address</span>
                <strong>123 Main Street, Los Angeles, CA</strong>
              </div>
              <div className="billing-line-item">
                <span>Payment Method</span>
                <strong>Visa ending 1234</strong>
              </div>
              <div className="billing-line-item">
                <span>Next Payment</span>
                <strong>May 10, 2024</strong>
              </div>
            </div>
          </article>

          <article className="billing-card transactions-card">
            <div className="section-head">
              <h3>Transactions</h3>
              <button type="button">Export</button>
            </div>

            <div className="transaction-list">
              {transactions.map((item) => (
                <div className="transaction-item" key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.subtitle}</p>
                  </div>
                  <div className={`transaction-value ${item.tone}`}>{item.amount}</div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <footer className="profile-footer">
          © 2021, Made with love by Creative Tim and Simmmple for a better web
        </footer>
      </main>
    </div>
  )
}

export default Billing
