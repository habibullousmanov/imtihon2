import React from 'react'
import './Sign.css'

function Sign({ onSwitch }) {
  return (
    <div className="signin-page">
      <div className="signin-shell">
        <header className="signin-header">
          <div className="signin-brand">
            <div className="signin-brand-icon">P</div>
            <span>Purity UI Dashboard</span>
          </div>

          <nav className="signin-nav">
            <button type="button" onClick={() => onSwitch('dashboard')}>Dashboard</button>
            <button type="button" onClick={() => onSwitch('profile')}>Profile</button>
            <button type="button" onClick={() => onSwitch('signup')}>Sign Up</button>
            <button type="button" className="active" onClick={() => onSwitch('sign')}>Sign In</button>
          </nav>

          <button type="button" className="signin-header-button">Free Download</button>
        </header>

        <main className="signin-main">
          <section className="signin-form-area">
            <div className="signin-copy">
              <h1>Welcome Back</h1>
              <p>Enter your email and password to sign in</p>
            </div>

            <form className="signin-form" onSubmit={(e) => { e.preventDefault(); onSwitch('dashboard') }}>
              <label>
                Email
                <input type="email" placeholder="Your email address" />
              </label>

              <label>
                Password
                <input type="password" placeholder="Your password" />
              </label>

              <label className="signin-remember">
                <input type="checkbox" defaultChecked />
                <span>Remember me</span>
              </label>

              <button type="submit" className="signin-submit">Sign In</button>
            </form>

            <p className="signin-switch">
              Don&apos;t have an account?{' '}
              <button type="button" onClick={() => onSwitch('signup')}>
                Sign Up
              </button>
            </p>
          </section>

          <aside className="signin-visual">
            <div className="signin-visual-overlay" />
            <div className="signin-visual-mark">
              <div className="chakra-icon">C</div>
              <span>chakra</span>
            </div>
          </aside>
        </main>

        <footer className="signin-footer">
          <span>2021, Made with love by Creative Tim and Simmmple</span>
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

export default Sign

