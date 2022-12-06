import { createContext } from 'react'
import { INITIAL_FILTERS_VALUE } from '@/context/charactersFilters/charactersFilters.const'
import { State } from '@/context/charactersFilters/charactersFilters.types'

export const CharactersFilterContext = createContext<State>(INITIAL_FILTERS_VALUE)
