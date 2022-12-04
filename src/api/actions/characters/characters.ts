import { CHARACTERS_KEY } from '@/api/actions/characters/charactersKey'
import { getCharacters } from '@/api/actions/characters/getCharacters'
import { useInfiniteQuery } from '@/hooks/useInfiniteQuery/useInfiniteQuery'

export const useGetInfiniteCharactersQuery = () => useInfiniteQuery({
  queryKey: CHARACTERS_KEY,
  queryFn:() => getCharacters(1),
}
)