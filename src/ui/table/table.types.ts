import { Column, Row } from 'react-table'

export type TableProps <T extends object> = {
    columns: Column[],
    data: T[],
    getSpecialRowBackground?: (originalRow:Row) => boolean
    pages: number
    currentPage: number,
}
