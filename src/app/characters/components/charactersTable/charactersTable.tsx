import React from 'react'
import { CharactersRow, CharactersTableProps } from '@/app/characters/components/charactersTable/charactersTable.types'
import { Table } from '@/ui/table/table'
import { Row } from 'react-table'
import { Results } from '@/api/actions/characters/characters.types'
import { STATUS } from '@/app/characters/components/charactersTable/characters.consts'
import { NameCell } from '@/app/characters/components/nameCell/nameCell'
import { Avatar } from '@/ui/avatar/avatar'
import { OriginCell } from '@/app/characters/components/originCell/originCell'
import { StatusCell } from '@/app/characters/components/statusCell/statusCell'
import { ErrorHeader } from '@/app/characters/components/errorHeader/errorHeader'

const COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: (data:CharactersRow) => <NameCell name={data.cell.value} species={data.row.original.species}/>,
    width: 231,
    maxWidth: 231,
  },
  {
    Header: 'Avatar',
    accessor: 'image',
    Cell: (data:CharactersRow) => <Avatar src={data.cell.value}/>,
    width: 162,
    maxWidth: 162,
  },
  {
    Header: 'Origin',
    accessor: 'origin.name',
    Cell: (data:CharactersRow) => <OriginCell origin={data.cell.value}/>,
    width: 162,
    maxWidth: 162,
  },
  {
    Header: 'Gender',
    accessor: 'gender',
    width: 162,
    maxWidth: 162,
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: (data:CharactersRow) => <StatusCell status={data.cell.value} />,
    width: 162,
    maxWidth: 162,
  }
]

const getSpecialRowBackground = (row: Row) => (row.original as Results).status === STATUS.dead

export const CharactersTable = ({ info, data, errorText }:CharactersTableProps) => {
  if (errorText || !data) {
    return (<ErrorHeader text={errorText}/>)
  }
  return (
    <Table
      data={data}
      columns={COLUMNS}
      getSpecialRowBackground={getSpecialRowBackground}
      pages={info.pages}
    />
  )
}
