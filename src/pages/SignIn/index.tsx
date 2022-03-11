import { Button } from '~/components/Button'
import { useAuthStore } from '~/store/AuthStore'

export function SignIn () {
  const { login } = useAuthStore()

  return (
    <div>
      sign in

      <Button onClick={ login }>
        login
      </Button>
    </div>
  )
}
