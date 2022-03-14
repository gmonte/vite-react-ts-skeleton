import {
  useMemo,
  createContext,
  PropsWithChildren,
  useContext,
  useCallback
} from 'react'

import { useLocalStorage } from '~/hooks/useLocalStorage'
import {
  AuthLogin,
  AuthLogout,
  AuthContextState
} from '~/types'

export const Context = createContext({} as AuthContextState)

export const useAuthStore = () => useContext(Context)

export function AuthStore ({ children }: PropsWithChildren<{}>) {
  const [authenticated, setAuthenticated] = useLocalStorage('auth/authenticated', false)

  const login = useCallback<AuthLogin>(
    async (username, password) => {
      console.log('username', username)
      console.log('password', password)
      setAuthenticated(true)
    },
    [setAuthenticated]
  )

  const logout = useCallback<AuthLogout>(
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
