import React from 'react'
import { PaginationItemProps } from '@/ui/paginationItem/paginationItem.types'
import styles from './paginationItem.module.scss'
import classNames from 'classnames'

export const PaginationItem = ({ isSelected, value, ...props }:PaginationItemProps) => {
  const itemClass = classNames(styles.paginationItem, { [styles.selectedItem]: isSelected })

  return (
    <div className={itemClass} {...props}>
      {value}
    </div>
  )
}