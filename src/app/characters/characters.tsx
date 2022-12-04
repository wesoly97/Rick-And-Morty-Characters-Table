import React from 'react'
import { MainLayout } from '@/layouts/mainLayout/mainLayout'
import { Header } from '@/app/characters/components/header'
import { useGetInfiniteCharactersQuery } from '@/api/actions/characters/characters'

export const Characters = () => {
  const { data } = useGetInfiniteCharactersQuery()

  return (
    <MainLayout>
      <Header />
    </MainLayout>
  )
}
