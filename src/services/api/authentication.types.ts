export interface LoginRequest {
  username: string
  password: string
}

export interface AuthSuccessResponse {
  accessToken: string
}
