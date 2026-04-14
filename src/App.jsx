import React, { useState } from 'react'

import Signup from './pages/sing up/signup'
import Sign from './pages/sing in/Sign'
import Profile from './pages/profile/profile'
import Billing from './pages/billing/Billing'
import Table from './pages/table/Table'
import Dashboard from './pages/dashboard/Dashboard'

export default function App() {
  const [page, setPage] = useState('signup')

  const handleSwitch = (target) => {
    if (!target) return setPage('sign')
      
    setPage(target)
  }

  switch (page) {
    case 'signup':
      return <Signup onSwitch={handleSwitch} />

    case 'sign':
      return <Sign onSwitch={handleSwitch} />

    case 'dashboard':
      return <Dashboard onSwitch={handleSwitch} />

    case 'profile':
      return <Profile onSwitch={handleSwitch} />

    case 'table':
      return <Table onSwitch={handleSwitch} />

    case 'billing':
      return <Billing onSwitch={handleSwitch} />

    default:
      return <Signup onSwitch={handleSwitch} />
  }
}