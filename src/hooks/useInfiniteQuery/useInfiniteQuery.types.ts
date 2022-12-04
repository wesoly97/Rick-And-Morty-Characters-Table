import { QueryKey, QueryFunction, UseInfiniteQueryOptions } from 'react-query'

export type useInfiniteQueryProps = {
    queryKey: QueryKey,
    queryFn: QueryFunction ,
    options?: UseInfiniteQueryOptions
}