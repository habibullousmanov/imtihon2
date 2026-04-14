import React from 'react'

function sidebar() {
  return (
    <div>
            <aside className="billing-sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-icon">⌬</div>
          <div>
            <div className="brand-label">Purity UI Dashboard</div>
            <div className="brand-copy">Billing</div>
          </div>
        </div>

        <nav className="sidebar-menu">
          <a href="#" onClick={(e) => { e.preventDefault(); onSwitch('profile') }}>Dashboard</a>
          <a href="#" className="active">Billing</a>
          <a href="#">Invoices</a>
          <a href="#">Transactions</a>
          <a href="#">Settings</a>
        </nav>

        <div className="sidebar-section">
          <div className="section-title">Account Pages</div>
          <a href="#" onClick={(e) => { e.preventDefault(); onSwitch('profile') }}>Profile</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onSwitch('sign') }}>Sign In</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onSwitch('signup') }}>Sign Up</a>
        </div>

        <div className="sidebar-card">
          <div className="sidebar-card-title">Need help?</div>
          <div className="sidebar-card-text">Please check our docs for more details.</div>
          <button className="sidebar-button">Documentation</button>
        </div>
      </aside>
    </div>
  )
}

export default sidebar
