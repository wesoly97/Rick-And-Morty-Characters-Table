import React from 'react'
import { OriginCellProps } from '@/app/characters/components/originCell/originCell.types'
import styles from './originCell.module.scss'
import { ORIGIN } from '@/app/characters/components/originCell/originCell.consts'
import classNames from 'classnames'

export const OriginCell = ({ origin }:OriginCellProps) => {
  const originClass = classNames({ [styles.originCell]: origin === ORIGIN.unknown })

  return (
    <div className={originClass}>
      {origin}
    </div>
  )
}