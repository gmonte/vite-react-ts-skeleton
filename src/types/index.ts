import {
  SetStateAction,
  Dispatch
} from 'react'

import { AxiosResponse } from 'axios'

export type LocalStorageSetter<T = any> = Dispatch<SetStateAction<T | undefined>>

export type Request<Body = any> = Promise<AxiosResponse<Body>>

export interface LoginRequest {
  username: string
  password: string
}

export interface AuthSuccessResponse {
  accessToken: string
}

export type AuthLogin = (username: string, password: string) => Promise<void>

export type AuthLogout = () => void

export interface AuthContextState {
  authenticated: boolean
  login: AuthLogin
  logout: AuthLogout
}

export interface I18nContextState {
  locale: string
  setLocale: LocalStorageSetter<string>
}
