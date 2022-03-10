import { PropsWithChildren } from 'react'

import { AuthStore } from './AuthStore'
import { I18nStore } from './I18nStore'

export function StoreProvider ({ children }: PropsWithChildren<{}>) {
  return (
    <AuthStore>
      <I18nStore>
        {children}
      </I18nStore>
    </AuthStore>
  )
}
