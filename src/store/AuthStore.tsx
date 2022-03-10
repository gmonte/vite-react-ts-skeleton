import {
  useMemo,
  createContext,
  PropsWithChildren,
  useContext
} from 'react'

import {
  useLocalStorage,
  Setter
} from './useLocalStorage'

interface AuthContextState {
  authenticated: boolean
  setAuthenticated: Setter<boolean>
}

const initialState: AuthContextState = {
  authenticated: false,
  setAuthenticated: () => false
}

export const Context = createContext(initialState)

export const useAuthStore = () => useContext(Context)

export function AuthStore ({ children }: PropsWithChildren<{}>) {
  const [authenticated, setAuthenticated] = useLocalStorage('auth/authenticated', initialState.authenticated)

  const value = useMemo<AuthContextState>(
    () => ({
      authenticated,
      setAuthenticated
    }),
    [authenticated, setAuthenticated]
  )

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  )
}
