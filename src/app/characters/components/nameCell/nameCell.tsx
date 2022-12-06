import React from 'react'
import { NameCellProps } from '@/app/characters/components/nameCell/nameCell.types'
import styles from './nameCell.module.scss'

export const NameCell = ({ name, species }: NameCellProps) => {
  return (
    <>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.species}>
        {species}
      </div>
    </>
  )
}