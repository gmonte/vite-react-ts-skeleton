import { AxiosError } from 'axios'

export const createErrorMessageInterceptor = () => {
  api.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
      if (error.response?.status === 400) {
        console.log('messages', error.response?.data?.message)
      }
      return await Promise.reject(error)
    }
  )
}
