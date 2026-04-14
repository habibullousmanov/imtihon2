import React from 'react'
import './Signup.css'

function Signup({ onSwitch }) {
  return (
    <div className="signup-page">
      <div className="signup-shell">
        <header className="signup-header">
          <div className="signup-brand">
            <div className="signup-brand-icon">P</div>
            <span>Purity UI Dashboard</span>
          </div>

          <nav className="signup-nav">
            <button type="button" onClick={() => onSwitch('dashboard')}>Dashboard</button>
            <button type="button" onClick={() => onSwitch('profile')}>Profile</button>
            <button type="button" className="active" onClick={() => onSwitch('signup')}>Sign Up</button>
            <button type="button" onClick={() => onSwitch('sign')}>Sign In</button>
          </nav>

          <button type="button" className="signup-header-button">Free Download</button>
        </header>

        <main className="signup-main">
          <section className="signup-banner">
            <div className="signup-banner-overlay" />
            <div className="signup-banner-copy">
              <h1>Welcome!</h1>
              <p>Use these awesome forms to login or create a new account in your project for free.</p>
            </div>
          </section>

          <section className="signup-card">
            <div className="signup-card-head">
              <h2>Register with</h2>
            </div>

            <div className="signup-socials">
              <button type="button">F</button>
              <button type="button">A</button>
              <button type="button">G</button>
            </div>

            <div className="signup-divider">
              <span>or</span>
            </div>

            <form className="signup-form" onSubmit={(e) => { e.preventDefault(); onSwitch('dashboard') }}>
              <label>
                Name
                <input type="text" placeholder="Your full name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="Your email address" />
              </label>
              <label>
                Password
                <input type="password" placeholder="Your password" />
              </label>

              <label className="signup-remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button type="submit" className="signup-submit">Sign Up</button>
            </form>

            <p className="signup-switch">
              Already have an account?{' '}
              <button type="button" onClick={() => onSwitch('sign')}>
                Sign In
              </button>
            </p>
          </section>
        </main>

        <footer className="signup-footer">
          <span>© 2021, Made with love by Creative Tim and Simmmple</span>
          <div>
            <button type="button">Creative Tim</button>
            <button type="button">Simmmple</button>
            <button type="button">Blog</button>
            <button type="button">License</button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Signup

