import React from "react";
import "./dashboard.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import icon1 from "../../assets/img/img/svg/icon1.svg"
const statCards = [
  { title: "Today's Money", value: "$53,000", change: "+55%", icon: "$" },
  { title: "Today's Users", value: "2,300", change: "+5%", icon: "U" },
  { title: "New Clients", value: "+3,052", change: "-14%", icon: "N" },
  { title: "Total Sales", value: "$173,000", change: "+8%", icon: "S" },
];

const sidebarMain = [
  { label: "Dashboard", key: "dashboard" },
  { label: "Tables", key: "table" },
  { label: "Billing", key: "billing" },
  { label: "RTL", key: "dashboard" },
];

const sidebarAccount = [
  { label: "Profile", key: "profile" },
  { label: "Sign In", key: "sign" },
  { label: "Sign Up", key: "signup" },
];

const activeUsers = [
  { name: icon1, users: 320 },
  { name: "02", users: 210 },
  { name: "03", users: 280 },
  { name: "04", users: 190 },
  { name: "05", users: 360 },
  { name: "06", users: 250 },
  { name: "07", users: 340 },
  { name: "08", users: 230 },
];

const salesOverview = [
  { name: "Apr", visits: 240, revenue: 180 },
  { name: "May", visits: 160, revenue: 150 },
  { name: "Jun", visits: 300, revenue: 200 },
  { name: "Jul", visits: 280, revenue: 190 },
  { name: "Aug", visits: 360, revenue: 240 },
  { name: "Sep", visits: 260, revenue: 210 },
  { name: "Oct", visits: 220, revenue: 170 },
  { name: "Nov", visits: 340, revenue: 205 },
];

const userStats = [
  { label: "Users", value: "32,984", accent: "teal" },
  { label: "Clicks", value: "2.42m", accent: "mint" },
  { label: "Sales", value: "2,400$", accent: "aqua" },
  { label: "Items", value: "320", accent: "sky" },
];

const projects = [
  {
    name: "Chakra Soft UI Version",
    members: 5,
    budget: "$14,000",
    completion: 60,
  },
  { name: "Add Progress Track", members: 2, budget: "$3,000", completion: 10 },
  {
    name: "Fix Platform Errors",
    members: 2,
    budget: "Not set",
    completion: 100,
  },
  {
    name: "Launch our Mobile App",
    members: 5,
    budget: "$32,000",
    completion: 100,
  },
  {
    name: "Add the New Pricing Page",
    members: 4,
    budget: "$400",
    completion: 25,
  },
  {
    name: "Redesign New Online Shop",
    members: 4,
    budget: "$7,600",
    completion: 40,
  },
];

const orders = [
  { title: "$2400, Design changes", time: "22 DEC 7:20 PM", tone: "green" },
  { title: "New order #4219423", time: "21 DEC 11:21 PM", tone: "red" },
  { title: "Server Payments for April", time: "21 DEC 9:28 PM", tone: "blue" },
  {
    title: "New card added for order #3210145",
    time: "20 DEC 3:52 PM",
    tone: "orange",
  },
  {
    title: "Unlock packages for Development",
    time: "19 DEC 11:35 PM",
    tone: "purple",
  },
];

function Dashboard({ onSwitch }) {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">
          <div className="brand-badge">P</div>
          <div>
            <p>Purity UI Dashboard</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {sidebarMain.map((item) => (
            <button
              key={item.label}
              type="button"
              className={item.key === "dashboard" ? "is-active" : ""}
              onClick={() => onSwitch?.(item.key)}
            >
              <span className="nav-icon">{item.label.slice(0, 1)}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-section-label">Account Pages</div>

        <nav className="sidebar-nav secondary">
          {sidebarAccount.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => onSwitch?.(item.key)}
            >
              <span className="nav-icon">{item.label.slice(0, 1)}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-help">
          <div className="help-icon">?</div>
          <h4>Need help?</h4>
          <p>Please check our docs for more details.</p>
          <button type="button">Documentation</button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <p className="breadcrumb">Pages / Dashboard</p>
            <h1>Dashboard</h1>
          </div>

          <div className="topbar-actions">
            <label className="search-box">
              <span>Q</span>
              <input type="text" placeholder="Type here..." />
            </label>
            <button type="button" onClick={() => onSwitch?.("sign")}>
              Sign In
            </button>
            <div className="topbar-dot" />
            <div className="topbar-dot" />
          </div>
        </header>

        <section className="stats-grid">
          {statCards.map((card) => (
            <article className="stat-card" key={card.title}>
              <div>
                <p>{card.title}</p>
                <h3>{card.value}</h3>
                <span
                  className={
                    card.change.startsWith("-") ? "negative" : "positive"
                  }
                >
                  {card.change}
                </span>
              </div>
              <div className="stat-icon">{card.icon}</div>
            </article>
          ))}
        </section>

        <section className="hero-grid">
          <article className="hero-card intro-card">
            <div>
              <p className="eyebrow">Built by developers</p>
              <h3>Purity UI Dashboard</h3>
              <p className="hero-copy">
                From colors, cards, typography to complex elements, you will
                find the full documentation.
              </p>
              <button type="button">Read more</button>
            </div>
            <div>
              <article className="hero-card chakra-card">
                <div className="chakra-badge">C</div>
                <div>
                  <h3>chakra</h3>
                  <p>Clean dashboard blocks with a smooth teal gradient.</p>
                </div>
              </article>
            </div>
          </article>

          <article className="hero-card rocket-card">
            <div className="rocket-overlay" />
            <div className="rocket-copy">
              <h3>Work with the Rockets</h3>
              <p>
                Wealth creation is an evolutionarily recent positive-sum game.
              </p>
              <button type="button">Read more</button>
            </div>
          </article>
        </section>

        <section className="chart-grid">
          <article className="panel dark-panel">
            <div className="panel-chart">
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={activeUsers} barCategoryGap="34%">
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    stroke="#94a3b8"
                  />
                  <YAxis hide />
                  <Tooltip cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                  <Bar dataKey="users" fill="#ffffff" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="panel-header compact">
              <div>
                <h3>Active Users</h3>
                <p>(+23) than last week</p>
              </div>
            </div>

            <div className="mini-stats">
              {userStats.map((item) => (
                <div className="mini-stat" key={item.label}>
                  <div className={`mini-icon ${item.accent}`}>
                    {item.label.slice(0, 1)}
                  </div>
                  <div>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel light-panel">
            <div className="panel-header">
              <div>
                <h3>Sales Overview</h3>
                <p>(+5) more in 2021</p>
              </div>
            </div>

            <div className="panel-chart sales-chart">
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={salesOverview}>
                  <defs>
                    <linearGradient id="visitsFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7ce7db" stopOpacity={0.5} />
                      <stop
                        offset="95%"
                        stopColor="#7ce7db"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                    <linearGradient
                      id="revenueFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#1e293b"
                        stopOpacity={0.18}
                      />
                      <stop
                        offset="95%"
                        stopColor="#1e293b"
                        stopOpacity={0.02}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e2e8f0"
                  />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    stroke="#94a3b8"
                  />
                  <YAxis tickLine={false} axisLine={false} stroke="#94a3b8" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="visits"
                    stroke="#67e8f9"
                    fillOpacity={1}
                    fill="url(#visitsFill)"
                    strokeWidth={3}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#334155"
                    fillOpacity={1}
                    fill="url(#revenueFill)"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="visits"
                    stroke="#67e8f9"
                    dot={false}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </article>
        </section>

        <section className="bottom-grid">
          <article className="panel table-panel">
            <div className="panel-header">
              <div>
                <h3>Projects</h3>
                <p>30 done this month</p>
              </div>
            </div>

            <div className="projects-table">
              <div className="projects-head">
                <span>Companies</span>
                <span>Members</span>
                <span>Budget</span>
                <span>Completion</span>
              </div>

              {projects.map((project) => (
                <div className="project-row" key={project.name}>
                  <div className="project-company">
                    <div className="company-logo">
                      {project.name.slice(0, 1)}
                    </div>
                    <strong>{project.name}</strong>
                  </div>
                  <div className="members-stack">
                    {Array.from({ length: activeUsers.members }).map((_, index) => (
<img src={`${project.name}-${index}`} alt="" />                     
                    ))}
                  </div>
                  <span className="budget">{project.budget}</span>
                  <div className="completion-cell">
                    <span>{project.completion}%</span>
                    <div className="completion-track">
                      <div style={{ width: `${project.completion}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel orders-panel">
            <div className="panel-header">
              <div>
                <h3>Orders overview</h3>
                <p>+30% this month</p>
              </div>
            </div>

            <div className="orders-list">
              {orders.map((order) => (
                <div className="order-item" key={order.title}>
                  <div className={`order-dot ${order.tone}`} />
                  <div>
                    <strong>{order.title} </strong>

                    <p>{order.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
