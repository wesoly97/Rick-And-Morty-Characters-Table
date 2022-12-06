import { CharactersErrorResponse } from '@/api/actions/characters/characters.types'

export const getCharactersError = (error: CharactersErrorResponse) => error.response.data.error
