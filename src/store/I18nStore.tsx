import {
  useMemo,
  createContext,
  PropsWithChildren,
  useContext
} from 'react'

import { I18nProvider } from '@meta-react/i18n'

import { useLocalStorage } from '~/hooks/useLocalStorage'
import { dictionaries } from '~/translations'
import { I18nContextState } from '~/types'

export const Context = createContext({} as I18nContextState)

export const useI18nStore = () => useContext(Context)

export function I18nStore ({ children }: PropsWithChildren<{}>) {
  const [locale, setLocale] = useLocalStorage('i18n/locale', 'en')

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
