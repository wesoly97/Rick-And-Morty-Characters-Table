import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { TableProps } from '@/ui/table/table.types'
import styles from './table.module.scss'
import { v4 as uuid } from 'uuid'
import { Pagination } from '@/ui/pagination/pagination'

export const Table = <T extends object>({
  columns,
  data,
  getSpecialRowBackground,
  pages,
  currentPage
}:TableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    data: useMemo(() => data, [data]),
    columns: useMemo(() => columns, [columns])
  })

  return (
    <div className={styles.container}>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} key={uuid()}>
              <th className={styles.checkboxContainer}>
                <input type={'checkbox'} />
              </th>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps({
                  style: {
                    minWidth: column?.minWidth,
                    width: column?.width,
                    maxWidth: column.maxWidth,
                  },
                })}
                key={uuid()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr
                {...row.getRowProps()}
                className={getSpecialRowBackground && getSpecialRowBackground(row) ? styles.grayBackground : ''}
                key={uuid()}
              >
                <td className={styles.checkboxContainer}>
                  <input type={'checkbox'} />
                </td>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps({
                    style: {
                      minWidth: cell.column?.minWidth,
                      width: cell.column?.width,
                      maxWidth: cell.column?.maxWidth,
                    },
                  })}
                  key={uuid()}
                  title={cell.value}
                  >
                    {cell.render('Cell')}
                  </td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} pages={pages} />
    </div>
  )
}