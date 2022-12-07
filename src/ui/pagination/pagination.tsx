import React, { useMemo } from 'react'
import { PaginationProps } from '@/ui/pagination/pagination.types'
import { PaginationItem } from '@/ui/paginationItem/paginationItem'
import styles from './pagination.module.scss'
import { PaginationSeparator } from '@/ui/paginationSeparator/paginationSeparator'

const PAGES_BRAKE_POINT = 6

export const Pagination = ({ currentPage = 1, pages }:PaginationProps) => {
  const pagesBrakePoint = pages > PAGES_BRAKE_POINT
  const restOfThePages = pagesBrakePoint ? 3 : pages

  const restOfThePagesArray = useMemo(
    () => Array.from({ length: restOfThePages }, (_, number) => number + 1),
    [restOfThePages])

  return (
    <div className={styles.paginationContainer}>
      {pagesBrakePoint && <PaginationItem isSelected={false} value={'<'} />}
      {restOfThePagesArray.map(page => (
        <PaginationItem isSelected={page === currentPage} value={page.toString()} key={page}/>
      ))}
      {pagesBrakePoint && <PaginationSeparator />}
      {pagesBrakePoint && (
        <>
          <PaginationItem isSelected={currentPage === (pages - 2)} value={(pages - 2).toString()} />
          <PaginationItem isSelected={currentPage === (pages - 1)} value={(pages - 1).toString()} />
          <PaginationItem isSelected={currentPage === pages} value={pages.toString()} />
        </>
      )}
      {pagesBrakePoint && <PaginationItem isSelected={false} value={'>'} />}
    </div>
  )
}