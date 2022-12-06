import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider as TanstackQueryClientProvider } from 'react-query'
import { queryClientProviderProps } from '@/api/queryClientProvider/queryClientProvider.types'

export const QueryClientProvider = ({ children }:queryClientProviderProps) => {
  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        },
      },
    })
  }, [])

  return (
    <TanstackQueryClientProvider client={queryClient} >
      {children}
    </TanstackQueryClientProvider>
  )
}
