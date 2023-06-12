import { HOST } from '@/config/env'
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

const BASE_URL = HOST

if (!BASE_URL) {
  throw new Error('환경 변수 NEXT_PUBLIC_ENV_DOMAIN은 반드시 설정되어야 합니다.')
}

const client: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, // 30초 후 요청이 자동으로 실패
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
})

// 요청 인터셉터
client.interceptors.request.use(
  (config) => {
    // 요청을 가로채서 처리...
    return config
  },
  (error: AxiosError) => {
    // 요청 실패 처리...
    return Promise.reject(error)
  }
)

// 응답 인터셉터
client.interceptors.response.use(
  (response: AxiosResponse) => {
    // 요청이 성공적으로 완료된 경우, 응답을 그대로 반환
    return response
  },
  (error: AxiosError) => {
    // 요청이 실패한 경우, HTTP 상태 코드에 따라 다르게 처리
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error('Bad Request')
          break
        case 401:
          console.error('Unauthorized')
          break
        case 404:
          console.error('Not Found')
          break
        // 다른 상태 코드에 대한 처리도 여기에 추가...
        default:
          console.error('An error occurred')
      }
    }
    return Promise.reject(error)
  }
)

export default client
