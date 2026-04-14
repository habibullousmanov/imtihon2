import React from 'react'
import './profile.css'

const accountSettings = [
  { label: 'Email me when someone follows me', checked: true },
  { label: 'Email me when someone answers on my post', checked: true },
  { label: 'Email me when someone mentions me', checked: false },
]

const appSettings = [
  { label: 'New launches and projects', checked: true },
  { label: 'Weekly product updates', checked: false },
  { label: 'Subscribe to newsletter', checked: false },
]

const conversations = [
  { name: 'Esthera Jackson', message: 'Hi! I need more information...', initials: 'EJ' },
  { name: 'Alexa Liras', message: 'Awesome work, can you change...', initials: 'AL' },
  { name: 'Esthera Jackson', message: 'Hi! I need more information...', initials: 'EJ' },
  { name: 'Esthera Jackson', message: 'About files I can...', initials: 'EJ' },
]

const projects = [
  {
    title: 'Modern',
    company: 'Project #1',
    text: 'As Uber works through a huge amount of internal management turmoil.',
  },
  {
    title: 'Scandinavian',
    company: 'Project #2',
    text: 'Music is something that every person has their own specific opinion about.',
  },
  {
    title: 'Minimalist',
    company: 'Project #3',
    text: 'Different people have different taste, and various types of music.',
  },
]

function profile({ onSwitch }) {
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
          <button type="button" onClick={() => onSwitch('billing')}>
            <span>B</span>
            Billing
          </button>
          <button type="button" className="active" onClick={() => onSwitch('profile')}>
            <span>P</span>
            Profile
          </button>
        </nav>

        <div className="profile-nav-label">Account Pages</div> 

        <nav className="profile-nav secondary">
          <button type="button" className="active" onClick={() => onSwitch('profile')}>
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
          <p>Please check our docs for more details about account pages and components.</p>
          <button type="button">Documentation</button>
        </div>
      </aside>

      <main className="profile-main">
        <header className="profile-topbar">
          <div>
            <p className="profile-breadcrumb">Pages / Profile</p>
            <h1>Profile</h1>
          </div>

          <div className="profile-top-actions">
            <label className="profile-search">
              <span>Q</span>
              <input type="text" placeholder="Type here..." />
            </label>
            <button type="button" onClick={() => onSwitch('sign')}>
              Sign In
            </button>
          </div>
        </header>

        <section className="profile-hero">
          <div className="hero-cover">
            <div className="hero-wave hero-wave-one" />
            <div className="hero-wave hero-wave-two" />
          </div>

          <div className="hero-profile-card">
            <div className="hero-identity">
              <div className="hero-avatar">EJ</div>
              <div>
                <h2>Esthera Jackson</h2>
                <p>estherajackson@gmail.com</p>
              </div>
            </div>

            <div className="hero-actions">
              <button type="button">Overview</button>
              <button type="button">Teams</button>
              <button type="button">Projects</button>
            </div>
          </div>
        </section>

        <section className="profile-grid">
          <article className="profile-card">
            <div className="card-head">
              <div>
                <h3>Platform Settings</h3>
                <p>Account</p>
              </div>
            </div>

            <div className="settings-group">
              {accountSettings.map((item) => (
                <label className="setting-row" key={item.label}>
                  <span>{item.label}</span>
                  <input type="checkbox" defaultChecked={item.checked} />
                </label>
              ))}
            </div>

            <div className="settings-caption">Application</div>

            <div className="settings-group">
              {appSettings.map((item) => (
                <label className="setting-row" key={item.label}>
                  <span>{item.label}</span>
                  <input type="checkbox" defaultChecked={item.checked} />
                </label>
              ))}
            </div>
          </article>

          <article className="profile-card">
            <div className="card-head">
              <div>
                <h3>Profile Information</h3>
                <p>About me</p>
              </div>
            </div>

            <p className="profile-copy">
              Hi, I am Esthera. Decisions: If you cannot decide, the answer is no. If two
              equally difficult paths, choose the one more painful in the short term.
            </p>

            <div className="profile-info-list">
              <div><span>Full Name:</span> <strong>Alec M. Thompson</strong></div>
              <div><span>Mobile:</span> <strong>(44) 123 1234 123</strong></div>
              <div><span>Email:</span> <strong>alec@simmmple.com</strong></div>
              <div><span>Location:</span> <strong>United States</strong></div>
              <div><span>Social Media:</span> <strong>v t i</strong></div>
            </div>
          </article>

          <article className="profile-card">
            <div className="card-head">
              <div>
                <h3>Conversations</h3>
                <p>Latest updates</p>
              </div>
            </div>

            <div className="conversation-list">
              {conversations.map((item, index) => (
                <div className="conversation-item" key={`${item.name}-${index}`}>
                  <div className="conversation-avatar">{item.initials}</div>
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.message}</p>
                  </div>
                  <button type="button">Reply</button>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="projects-section">
          <div className="projects-head">
            <div>
              <h3>Projects</h3>
              <p>Architects design houses</p>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card showcase" key={project.title}>
                <div className="project-image" />
                <div className="project-body">
                  <span className="project-company">{project.company}</span>
                  <h4>{project.title}</h4>
                  <p>{project.text}</p>
                  <div className="project-footer-row">
                    <button type="button">View All</button>
                    <div className="project-members">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <article className="project-card create-card">
              <div className="create-icon">+</div>
              <strong>Create a New Project</strong>
            </article>
          </div>
        </section>

        <footer className="profile-footer">
          � 2021, Made with love by Creative Tim and Simmmple for a better web
        </footer>
      </main>
    </div>
  )
}

export default profile

