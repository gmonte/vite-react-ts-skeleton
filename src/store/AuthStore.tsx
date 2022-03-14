import {
  useMemo,
  createContext,
  PropsWithChildren,
  useContext,
  useCallback
} from 'react'

import { useLocalStorage } from '~/hooks/useLocalStorage'

type Login = () => void

type Logout = () => void

interface AuthContextState {
  authenticated: boolean
  login: Login
  logout: Logout
}

export const Context = createContext({} as AuthContextState)

export const useAuthStore = () => useContext(Context)

export function AuthStore ({ children }: PropsWithChildren<{}>) {
  const [authenticated, setAuthenticated] = useLocalStorage('auth/authenticated', false)

  const login = useCallback<Login>(
    async () => {
      setAuthenticated(true)
    },
    [setAuthenticated]
  )

  const logout = useCallback<Logout>(
    () => {
      setAuthenticated(false)
    },
    [setAuthenticated]
  )

  const value = useMemo<AuthContextState>(
    () => ({
      authenticated,
      login,
      logout
    }),
    [authenticated, login, logout]
  )

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  )
}
