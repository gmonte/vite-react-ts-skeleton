import { useState } from 'react'

import {
  I18nProvider,
  I18n
} from '@meta-react/i18n'

import { Button } from './components/Button'
import { dictionaries } from './translations'

export function App () {
  const [locale, setLocale] = useState('en')
  return (
    <I18nProvider locale={ locale } dictionaries={ dictionaries }>
      <I18n as={ Button } onClick={ () => setLocale('en') }>
        english
      </I18n>
      <I18n as={ Button } onClick={ () => setLocale('fr') }>
        french
      </I18n>
      <I18n as={ Button } onClick={ () => setLocale('pt-BR') }>
        brazilian portuguese
      </I18n>
    </I18nProvider>
  )
}
