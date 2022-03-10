import { Button } from '../../components/Button'
import { useAuthStore } from '../../store/AuthStore'

export function SignIn () {
  const { setAuthenticated } = useAuthStore()

  return (
    <div>
      sign in

      <Button onClick={ () => setAuthenticated(true) }>
        login
      </Button>
    </div>
  )
}
