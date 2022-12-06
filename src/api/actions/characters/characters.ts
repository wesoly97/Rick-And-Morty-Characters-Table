import { CHARACTERS_KEY } from '@/api/actions/characters/charactersKey'
import { getCharacters } from '@/api/actions/characters/getCharacters'
import { useInfiniteQuery } from '@/hooks/useInfiniteQuery/useInfiniteQuery'
import { InfiniteData } from 'react-query'
import {
  CharactersResponseBody,
  UseGetInfiniteCharactersQueryProps
} from '@/api/actions/characters/characters.types'

const selectCharacters = (data:InfiniteData<unknown>) => ({
  pages: [],
  pageParams: [],
  info: (data.pages[0] as CharactersResponseBody).info,
  results: (data.pages[0] as CharactersResponseBody).results.slice(0, 5),
  errorText: (data.pages[0] as CharactersResponseBody).errorText
})

export const useGetInfiniteCharactersQuery = ({ name, species }:UseGetInfiniteCharactersQueryProps) => useInfiniteQuery(
  {
    queryKey: [CHARACTERS_KEY, name, species],
    queryFn:({ pageParam = 0 }) => getCharacters({ page: pageParam , name, species }),
    options: {
      select: selectCharacters,
      keepPreviousData: true,
      retry: false
    }
  }
)