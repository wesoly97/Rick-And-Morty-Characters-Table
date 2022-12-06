import React from 'react'
import { PaginationProps } from '@/ui/pagination/pagination.types'
import { PaginationItem } from '@/ui/paginationItem/paginationItem'
import styles from './pagination.module.scss'
import { PaginationSeparator } from '@/ui/paginationSeparator/paginationSeparator'

const PAGES_BRAKE_POINT = 6

export const Pagination = ({ currentPage = 1, pages }:PaginationProps) => {
  const pagesNew = pages > PAGES_BRAKE_POINT ? 3 : pages

  const RenderSeparator = () => {
    if (pages > PAGES_BRAKE_POINT) {
      return (<PaginationSeparator />)
    }
  }

  const getLefItems = () => {
    return Array.from({ length: pagesNew }, (_, number) => number+1)
  }

  return (
    <div className={styles.paginationContainer}>
      {pages > PAGES_BRAKE_POINT &&( <PaginationItem isSelected={false} value={'<'} />)}
      {getLefItems().map(value => (
        <PaginationItem isSelected={value === currentPage} value={value.toString()} key={value}/>
      ))}
      {RenderSeparator()}
      {pages > PAGES_BRAKE_POINT && (
        <>
          <PaginationItem isSelected={currentPage === (pages - 2)} value={(pages - 2).toString()} />
          <PaginationItem isSelected={currentPage === (pages - 1)} value={(pages - 1).toString()} />
          <PaginationItem isSelected={currentPage === pages} value={pages.toString()} />
        </>
      )}
      {pages > PAGES_BRAKE_POINT &&( <PaginationItem isSelected={false} value={'>'} />)}

    </div>
  )
}