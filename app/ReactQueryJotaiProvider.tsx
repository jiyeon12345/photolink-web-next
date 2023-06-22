'use client'

import { Provider } from 'jotai'
import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { worker } from '../mocks/worker'

// ! 에러떠서 주석처리함
if (process.env.NODE_ENV === 'development') {
  worker.start()
}

// * React Query 인스턴스
const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: Infinity,
        suspense: true,
        keepPreviousData: true,
        refetchOnReconnect: true,
        useErrorBoundary(error: any) {
          return error.reason !== 'INVALID_ARGUMENT'
        },
      },
    },
  })

interface ReactQueryJotaiProviderProps {
  children: React.ReactNode
}

export default function ReactQueryJotaiProvider({
  children,
}: ReactQueryJotaiProviderProps) {
  const queryClient = useRef(createQueryClient())

  return (
    <QueryClientProvider client={queryClient.current}>
      <Provider>{children}</Provider>
    </QueryClientProvider>
  )
}
