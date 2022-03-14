import useLS from 'use-local-storage'

export function useLocalStorage <T> (key: string, defaultState: T) {
  return useLS(key, defaultState)
}
