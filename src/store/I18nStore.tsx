import {
  useMemo,
  createContext,
  PropsWithChildren,
  useContext
} from 'react'

import { I18nProvider } from '@meta-react/i18n'

import {
  useLocalStorage,
  Setter
} from '~/hooks/useLocalStorage'
import { dictionaries } from '~/translations'

interface I18nContextState {
  locale: string
  setLocale: Setter<string>
}

const initialState: I18nContextState = {
  locale: 'en',
  setLocale: () => ''
}

export const Context = createContext(initialState)

export const useI18nStore = () => useContext(Context)

export function I18nStore ({ children }: PropsWithChildren<{}>) {
  const [locale, setLocale] = useLocalStorage('i18n/locale', initialState.locale)

  const value = useMemo<I18nContextState>(
    () => ({
      locale,
      setLocale
    }),
    [locale, setLocale]
  )

  return (
    <I18nProvider locale={ locale } dictionaries={ dictionaries }>
      <Context.Provider value={ value }>
        {children}
      </Context.Provider>
    </I18nProvider>
  )
}
