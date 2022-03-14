import axios from 'axios'

import { createErrorMessageInterceptor } from './interceptors'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

createErrorMessageInterceptor()
