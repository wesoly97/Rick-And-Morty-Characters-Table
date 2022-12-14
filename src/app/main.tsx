import React from 'react'
import ReactDOM from 'react-dom/client'
import { Characters } from '@/app/characters/characters'
import { QueryClientProvider } from '@/api/queryClientProvider/queryClientProvider'
import { CharactersFiltersProvider } from '@/context/charactersFilters/charactersFiltersProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider>
    <CharactersFiltersProvider>
      <Characters />
    </CharactersFiltersProvider>
  </QueryClientProvider>
)
