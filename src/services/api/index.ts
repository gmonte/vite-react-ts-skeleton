import axios from 'axios'

import { createErrorMessageInterceptor } from './interceptors'

const api = axios.create({
  baseURL: import.meta.env.API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

createErrorMessageInterceptor()

export default api
