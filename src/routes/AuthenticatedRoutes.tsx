import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import { AuthenticatedLayout } from '~/layouts/AuthenticatedLayout'
import { Dashboard } from '~/pages/Dashboard'
import { Home } from '~/pages/Home'

export function AuthenticatedRoutes () {
  return (
    <Routes>
      <Route path="/" element={ <AuthenticatedLayout /> }>
        <Route index element={ <Home /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Route>

      <Route path="*" element={ <Navigate to="/" replace /> } />
    </Routes>
  )
}
