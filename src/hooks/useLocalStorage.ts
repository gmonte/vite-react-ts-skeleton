import {
  SetStateAction,
  Dispatch
} from 'react'

import useLS from 'use-local-storage'

export type Setter<T = any> = Dispatch<SetStateAction<T | undefined>>

export function useLocalStorage <T> (key: string, defaultState: T) {
  return useLS(key, defaultState)
}
