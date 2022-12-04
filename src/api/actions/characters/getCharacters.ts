import { CHARACTERS_KEY } from '@/api/actions/characters/charactersKey'
import { getPaginatedData } from '@/utils/api/getPaginatedData'

export const getCharacters = (page: number) => getPaginatedData({ endpoint: CHARACTERS_KEY, page })
