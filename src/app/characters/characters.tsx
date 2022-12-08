import React, { useContext } from 'react'
import { MainLayout } from '@/layouts/mainLayout/mainLayout'
import { Header } from '@/app/characters/components/header/header'
import { useGetInfiniteCharactersQuery } from '@/api/actions/characters/characters'
import { CharactersData } from '@/api/actions/characters/characters.types'
import { CharactersTable } from '@/app/characters/components/charactersTable/charactersTable'
import styles from './characters.module.scss'
import { CharactersForm } from '@/app/characters/components/charactersForm/charactersForm'
import { CharactersFilterContext } from '@/context/charactersFilters/charactersFiltersContext'

export const Characters = () => {
  const { name, species } = useContext(CharactersFilterContext)
  const { data } = useGetInfiniteCharactersQuery({ name: name, species: species })
  const paginatedData = data as CharactersData

  return (
    <MainLayout>
      <div className={styles.container}>
        <Header text={'Characters'} />
        <CharactersForm />
        <CharactersTable
          info={paginatedData?.info}
          data={paginatedData?.results}
          errorText={paginatedData?.errorText}
        />
      </div>
    </MainLayout>
  )
}
