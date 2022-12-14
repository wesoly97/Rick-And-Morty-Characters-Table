import { CHARACTERS_KEY } from '@/api/actions/characters/charactersKey'
import { getPaginatedData } from '@/utils/api/getPaginatedData'
import { CharactersErrorResponse, GetCharactersProps } from '@/api/actions/characters/characters.types'
import { getCharactersError } from '@/api/actions/characters/characters.utils'

export const getCharacters = async ({ page, name, species }:GetCharactersProps) => {
  try {
    const params = { page, name, species }
    const data = await getPaginatedData({ endpoint: CHARACTERS_KEY, params })

    return { ...data, info: { ...{ currentPage: page }, ...data.info } }
  } catch (error) {
    return { errorText: getCharactersError(<CharactersErrorResponse>error), info: { count: 0, pages: 0 }, results: [] }
  }
}

