import {
  Outlet,
  Link
} from 'react-router-dom'

import { Button } from '~/components/Button'
import { useAuthStore } from '~/store/AuthStore'

export function AuthenticatedLayout () {
  const { logout } = useAuthStore()

  return (
    <div>
      authenticated layout {' > '}

      <Link to="/">Home</Link>
      {' | '}
      <Link to="/dashboard">Dashboard</Link>

      <Outlet />

      <br />

      <Button onClick={ logout }>
        Logout
      </Button>
    </div>
  )
}
