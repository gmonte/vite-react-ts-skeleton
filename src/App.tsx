import { I18n } from '@meta-react/i18n'

import { Button } from './components/Button'
import { Router } from './routes'
import { StoreProvider } from './store'
import { useI18nStore } from './store/I18nStore'

function AppStored () {
  const { setLocale } = useI18nStore()

  return (
    <>
      <I18n as={ Button } onClick={ () => setLocale('en') }>
        english
      </I18n>
      <I18n as={ Button } onClick={ () => setLocale('fr') }>
        french
      </I18n>
      <I18n as={ Button } onClick={ () => setLocale('pt-BR') }>
        brazilian portuguese
      </I18n>

      <p>MODE: {import.meta.env.MODE}</p>

      <Router />
    </>
  )
}

export function App () {
  return (
    <StoreProvider>
      <AppStored />
    </StoreProvider>
  )
}
