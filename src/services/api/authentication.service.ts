import { AxiosPromise } from 'axios'

import api from '.'
import {
  LoginRequest,
  AuthSuccessResponse
} from './authentication.types'

const PREFIX = '/v1/auth'

export const routes = {
  login: `${PREFIX}/login`
}

export async function login (data: LoginRequest): AxiosPromise<AuthSuccessResponse> {
  return await api.post(routes.login, data)
}
