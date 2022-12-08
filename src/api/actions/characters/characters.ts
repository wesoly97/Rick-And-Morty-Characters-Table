import { CHARACTERS_KEY } from '@/api/actions/characters/charactersKey'
import { getCharacters } from '@/api/actions/characters/getCharacters'
import { useInfiniteQuery } from '@/hooks/useInfiniteQuery/useInfiniteQuery'
import { InfiniteData } from 'react-query'
import {
  CharactersResponseBody,
  UseGetInfiniteCharactersQueryProps
} from '@/api/actions/characters/characters.types'

const selectCharacters = (data:InfiniteData<unknown>) => {
  const currentPage = data.pages.length - 1
  const dataResult = data.pages[currentPage] as CharactersResponseBody

  return {
    pages: [],
    pageParams: [],
    info: dataResult?.info,
    results: dataResult?.results.slice(0, 5),
    errorText: dataResult?.errorText
  }
}

export const useGetInfiniteCharactersQuery = ({ name, species }:UseGetInfiniteCharactersQueryProps) => useInfiniteQuery(
  {
    queryKey: [CHARACTERS_KEY, name, species],
    queryFn:({ pageParam = 1 }) => getCharacters({ page: pageParam, name, species }),
    options: {
      select: selectCharacters,
      keepPreviousData: true,
      retry: false,
    }
  }
)