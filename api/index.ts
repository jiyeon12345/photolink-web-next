import axios, { AxiosInstance } from 'axios'

const HOST = process.env.NEXT_PUBLIC_ENV_HOST || ''
const PORT = process.env.NEXT_PUBLIC_ENV_PORT || ''
const BASE_URL = `${HOST}:${PORT}`

if (!HOST || !PORT) {
  throw new Error('환경 변수 NEXT_PUBLIC_ENV_HOST와 NEXT_PUBLIC_ENV_PORT는 반드시 설정되어야 합니다.')
}

const client: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, // 10초 후 요청이 자동으로 실패
  headers: {
    'Content-Type': `application/json;charset=UTF-8`,
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
})

// 요청 실패했을 때 동작
client.interceptors.response.use(null, (error) => {
  console.error(error)
  return Promise.reject(error)
})

export default client
