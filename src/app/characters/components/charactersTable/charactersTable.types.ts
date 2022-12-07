import { Results, Info } from '@/api/actions/characters/characters.types'

export type CharactersTableProps = {info: Info, data: Results[], errorText: string}

export type CharactersRow = {
    cell: {
        value: string
    },
    row: {
        original: {
            species?: string
            status?: string,
        }
    }
}
