import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import { GuestLayout } from '~/layouts/GuestLayout'
import { SignIn } from '~/pages/SignIn'
import { SignUp } from '~/pages/SignUp'

export function GuestRoutes () {
  return (
    <Routes>
      <Route path="/" element={ <GuestLayout /> }>
        <Route index element={ <SignIn /> } />
        <Route path="/sign-up" element={ <SignUp /> } />
      </Route>

      <Route path="*" element={ <Navigate to="/" replace /> } />
    </Routes>
  )
}
