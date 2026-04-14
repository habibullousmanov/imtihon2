import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Signup from './pages/sing up/Signup'
import Sign from './pages/sing in/Sign'
import Profile from './pages/profile/Profile'
import Billing from './pages/billing/Billing'
import Table from './pages/table/Table'
import Dashboard from './pages/dashboard/Dashboard'

const pageRoutes = {
  signup: '/signup',
  sign: '/signin',
  dashboard: '/dashboard',
  profile: '/profile',
  table: '/table',
  billing: '/billing',
}

export default function App() {
  const navigate = useNavigate()

  const handleSwitch = (target) => {
    navigate(pageRoutes[target] ?? pageRoutes.sign)
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/signup" element={<Signup onSwitch={handleSwitch} />} />
      <Route path="/signin" element={<Sign onSwitch={handleSwitch} />} />
      <Route path="/dashboard" element={<Dashboard onSwitch={handleSwitch} />} />
      <Route path="/profile" element={<Profile onSwitch={handleSwitch} />} />
      <Route path="/table" element={<Table onSwitch={handleSwitch} />} />
      <Route path="/billing" element={<Billing onSwitch={handleSwitch} />} />
      <Route path="*" element={<Navigate to="/signup" replace />} />
    </Routes>
  )
}
