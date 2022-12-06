import { FILTER_ACTIONS } from '@/context/charactersFilters/charactersFiltersActions'
import { NameAction, State } from '@/context/charactersFilters/charactersFilters.types'

export const charactersFiltersReducer = (state: State, action: NameAction) => {
  switch (action.type) {
  case FILTER_ACTIONS.SET_NAME:
    return { ...state, name: action.payload }
  case FILTER_ACTIONS.SET_SPECIES:
    return { ...state, species: action.payload }
  default:
    return { ...state, species: action.payload }
  }
}
