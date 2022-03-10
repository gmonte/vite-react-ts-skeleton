import { BrowserRouter } from 'react-router-dom'

import { useAuthStore } from '../store/AuthStore'
import { AuthenticatedRoutes } from './AuthenticatedRoutes'
import { GuestRoutes } from './GuestRoutes'

export function Router () {
  const { authenticated } = useAuthStore()

  return (
    <BrowserRouter>
      {authenticated ? <AuthenticatedRoutes /> : <GuestRoutes />}
    </BrowserRouter>
  )
}
