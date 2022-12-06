import { Action } from '@/context/charactersFilters/charactersFilters.types'

export enum FILTER_ACTIONS {
  SET_NAME = 'setName',
  SET_SPECIES = 'setSpecies'
}

export const setNameContext = (payload: string): Action => ({
  type: FILTER_ACTIONS.SET_NAME,
  payload,
})

export const setSpeciesContext = (payload: string): Action => ({
  type: FILTER_ACTIONS.SET_SPECIES,
  payload,
})