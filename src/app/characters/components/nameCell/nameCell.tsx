import React from 'react'
import { NameCellProps } from '@/app/characters/components/nameCell/nameCell.types'
import styles from './nameCell.module.scss'
import { STATUS } from '@/app/characters/components/charactersTable/characters.consts'
import classNames from 'classnames'

export const NameCell = ({ name, species, status }: NameCellProps) => {
  const speciesClass = classNames(styles.species, { [styles.speciesGray]: status === STATUS.dead })

  return (
    <>
      <div className={styles.name}>
        {name}
      </div>
      <div className={speciesClass}>
        {species}
      </div>
    </>
  )
}