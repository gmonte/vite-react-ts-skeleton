import {
  Request,
  LoginRequest,
  AuthSuccessResponse
} from '~/types'

import { api } from '.'

const PREFIX = '/v1/auth'

export const routes = { login: `${ PREFIX }/login` }

export async function login (data: LoginRequest): Request<AuthSuccessResponse> {
  return await api.post(routes.login, data)
}
