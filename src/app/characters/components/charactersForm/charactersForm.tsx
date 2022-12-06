import React, { ChangeEvent, useContext, useState } from 'react'
import { Input } from '@/ui/form/input/input'
import styles from './charactersForm.module.scss'
import { SelectMui } from '@/ui/form/select/select'
import { SelectChangeEvent } from '@mui/material'
import {
  SEARCH_ICON_COLOR,
  SELECT_STYLES,
  SPECIES
} from '@/app/characters/components/charactersForm/charactersForm.consts'
import SearchIcon from '@mui/icons-material/Search'
import { CharactersFilterContext } from '@/context/charactersFilters/charactersFiltersContext'
import { setNameContext, setSpeciesContext } from '@/context/charactersFilters/charactersFiltersActions'

export const CharactersForm = () => {
  const { name: contextName, dispatch } = useContext(CharactersFilterContext)
  const [species, setSpecies] = useState(SPECIES[0])
  const [name, setName] = useState(contextName)

  const onSpeciesChange = (event: SelectChangeEvent) => {
    if (event.target.value === SPECIES[0]) {
      dispatch(setSpeciesContext(''))
    } else {
      dispatch(setSpeciesContext(event.target.value))
    }
    setSpecies(event.target.value)
  }

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameContext(event.target.value))
    setName(event.target.value)
  }

  return (
    <div className={styles.searchInputContainer}>
      <div className={styles.inputContainer}>
        <Input
          type={'text'}
          name={'nameFilter'}
          onChange={onNameChange}
          placeholder={'Search'}
          value={name}
          InputProps={{ endAdornment: <SearchIcon sx={SEARCH_ICON_COLOR}/>, className: styles.input }}
        />
      </div>
      <div className={styles.selectContainer}>
        <SelectMui
          data={SPECIES}
          onChange={onSpeciesChange}
          value={species}
          sx={SELECT_STYLES}
        />
      </div>
    </div>
  )
}