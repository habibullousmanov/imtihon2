import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './sidebar.css'

function Sidebar() {
  return (
    <div>
      <aside className="billing-sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-icon">P</div>
          <div>
            <div className="brand-label">Purity UI Dashboard</div>
            <div className="brand-copy">Billing</div>
          </div>
        </div>

        <nav className="sidebar-menu">
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            Dashboard
          </NavLink>
          <NavLink to="/billing" className={({ isActive }) => (isActive ? 'active' : '')}>
            Billing
          </NavLink>
          <Link to="/billing">Invoices</Link>
          <Link to="/billing">Transactions</Link>
          <Link to="/billing">Settings</Link>
        </nav>

        <div className="sidebar-section">
          <div className="section-title">Account Pages</div>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
            Profile
          </NavLink>
          <NavLink to="/signin" className={({ isActive }) => (isActive ? 'active' : '')}>
            Sign In
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active' : '')}>
            Sign Up
          </NavLink>
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

export default Sidebar
