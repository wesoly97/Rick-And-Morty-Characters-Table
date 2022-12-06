import { useInfiniteQuery as useTanstackInfiniteQuery } from 'react-query'
import { useInfiniteQueryProps } from '@/hooks/useInfiniteQuery/useInfiniteQuery.types'

export const useInfiniteQuery = ({ queryKey, queryFn, options }:useInfiniteQueryProps) => useTanstackInfiniteQuery(
  queryKey,
  queryFn,
  {
    ...options
  }
)