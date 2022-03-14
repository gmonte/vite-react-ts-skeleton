import { useRef } from 'react'

import { Button } from '~/components/Button'
import { PasswordInput } from '~/components/PasswordInput'
import { TextInput } from '~/components/TextInput'
import { useAuthStore } from '~/store/AuthStore'

export function LoginForm () {
  const usernameRef = useRef<HTMLInputElement>({} as HTMLInputElement)
  const passwordRef = useRef<HTMLInputElement>({} as HTMLInputElement)

  const { login } = useAuthStore()

  return (
    <div>
      <TextInput ref={ usernameRef } placeholder="username" />
      <PasswordInput ref={ passwordRef } placeholder="password" />

      <Button onClick={ async () => await login(usernameRef.current.value, passwordRef.current.value) }>
        login
      </Button>
    </div>
  )
}
