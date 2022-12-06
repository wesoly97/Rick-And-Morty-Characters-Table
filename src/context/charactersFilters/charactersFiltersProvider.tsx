import { CharactersFiltersProviderProps } from '@/context/charactersFilters/charactersFilters.types'
import React, { useReducer } from 'react'
import { charactersFiltersReducer } from '@/context/charactersFilters/charactersFiltersReducer'
import { INITIAL_FILTERS_VALUE } from '@/context/charactersFilters/charactersFilters.const'
import { CharactersFilterContext } from '@/context/charactersFilters/charactersFiltersContext'

export const CharactersFiltersProvider = ({ children }:CharactersFiltersProviderProps) => {
  const [{ name, species }, dispatch] = useReducer(charactersFiltersReducer, INITIAL_FILTERS_VALUE)

  return (
    <CharactersFilterContext.Provider value={{ name, species, dispatch }}>
      {children}
    </CharactersFilterContext.Provider>
  )
}