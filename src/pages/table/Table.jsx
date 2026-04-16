import React from 'react'
import '../../pages/profile/profile.css'
import './table.css'

const authors = [
  { name: 'Esthera Jackson', role: 'Manager', department: 'Organization', status: 'Online', employed: '14/06/21', initials: 'EJ' },
  { name: 'Alexa Liras', role: 'Programmer', department: 'Developer', status: 'Online', employed: '14/06/21', initials: 'AL' },
  { name: 'Laurent Perrier', role: 'Executive', department: 'Projects', status: 'Offline', employed: '14/06/21', initials: 'LP' },
  { name: 'Michael Levi', role: 'Programmer', department: 'Developer', status: 'Online', employed: '14/06/21', initials: 'ML' },
  { name: 'Richard Gran', role: 'Manager', department: 'Executive', status: 'Offline', employed: '14/06/21', initials: 'RG' },
  { name: 'Melanie Roy', role: 'Programmer', department: 'Developer', status: 'Offline', employed: '14/06/21', initials: 'MR' },
]

const projects = [
  { company: 'Chakra Soft UI Version', members: 5, budget: '$14,000', status: 'Working', completion: 60 },
  { company: 'Add Progress Track', members: 2, budget: '$3,000', status: 'Canceled', completion: 10 },
  { company: 'Fix Platform Errors', members: 2, budget: 'Not set', status: 'Done', completion: 100 },
  { company: 'Launch our Mobile App', members: 5, budget: '$32,000', status: 'Done', completion: 100 },
  { company: 'Add the New Pricing Page', members: 4, budget: '$400', status: 'Working', completion: 25 },
]

function Table({ onSwitch }) {
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
          <button type="button" className="active" onClick={() => onSwitch('table')}>
            <span>T</span>
            Tables
          </button>
          <button type="button" onClick={() => onSwitch('billing')}>
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
          <p>Use tables to manage authors, monitor progress and keep the dashboard organized.</p>
          <button type="button">Documentation</button>
        </div>
      </aside>

      <main className="profile-main">
        <header className="profile-topbar">
          <div>
            <p className="profile-breadcrumb">Pages / Tables</p>
            <h1>Tables</h1>
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

        <section className="tables-stack">
          <article className="table-panel">
            <div className="tables-head solo">
              <div>
                <h2>Authors Table</h2>
              </div>
            </div>

            <div className="table-wrapper">
              <table className="authors-table">
                <thead>
                  <tr>
                    <th>Author</th>
                    <th>Function</th>
                    <th>Status</th>
                    <th>Employed</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {authors.map((author) => (
                    <tr key={author.name}>
                      <td>
                        <div className="author-cell">
                          <div className="author-avatar">{author.initials}</div>
                          <div>
                            <strong>{author.name}</strong>
                            <p>{author.name.toLowerCase().replace(' ', '')}@mail.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <strong>{author.role}</strong>
                        <p>{author.department}</p>
                      </td>
                      <td>
                        <span className={`status-badge ${author.status === 'Online' ? 'online' : 'offline'}`}>
                          {author.status}
                        </span>
                      </td>
                      <td>{author.employed}</td>
                      <td className="more-cell">...</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="table-panel">
            <div className="tables-head solo">
              <div>
                <h2>Projects</h2>
                <p>30 done this month</p>
              </div>
            </div>

            <div className="table-wrapper">
              <table className="projects-table">
                <thead>
                  <tr>
                    <th>Companies</th>
                    <th>Members</th>
                    <th>Budget</th>
                    <th>Completion</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.company}>
                      <td>
                        <div className="company-cell">
                          <div className="company-dot" />
                          <strong>{project.company}</strong>
                        </div>
                      </td>
                      <td>
                        <div className="members-stack">
                          {Array.from({ length: project.members }).map((_, index) => (
                            <span key={`${project.company}-${index}`}>{index + 1}</span>
                          ))}
                        </div>
                      </td>
                      <td className="budget-cell">{project.budget}</td>
                      <td>
                        <div className="completion-cell">
                          <span>{project.completion}%</span>
                          <div className="summary-bar">
                            <div style={{ width: `${project.completion}%` }} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>

        <footer className="profile-footer">
          � 2021, Made with love by Creative Tim and Simmmple for a better web
        </footer>
      </main>
    </div>
  )
}

export default Table

