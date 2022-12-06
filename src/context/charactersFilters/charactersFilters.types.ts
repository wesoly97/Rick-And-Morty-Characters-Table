import { ReactNode, Dispatch } from 'react'
import { FILTER_ACTIONS } from '@/context/charactersFilters/charactersFiltersActions'

export type CharactersFiltersProviderProps = { children?: ReactNode }

export type State = { name: string, species: string, dispatch: Dispatch<Action> }

export type NameAction = {
    type: string,
    payload: string
}

export type SetName = {
    type: FILTER_ACTIONS.SET_NAME;
    payload: string
};

export type SetSpecies = {
    type: FILTER_ACTIONS.SET_SPECIES;
    payload: string
};

export type Action = SetName | SetSpecies