import React from 'react'
import { STATUS } from '@/app/characters/components/charactersTable/characters.consts'
import { StatusProps } from '@/app/characters/components/statusCell/statusCell.types'
import styles from './statusCell.module.scss'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp'
import HelpIcon from '@mui/icons-material/Help'
import { STATUS_COLORS } from '@/app/characters/components/statusCell/statusCell.consts'

export const StatusCell = ({ status }:StatusProps) => {
  const Icon = () => {
    switch (status) {
    case STATUS.alive:
      return <CheckCircleOutlineSharpIcon sx={{ color: STATUS_COLORS.alive }} />
    case STATUS.unknown:
      return <HelpIcon sx={{ color: STATUS_COLORS.unknown }}/>
    case STATUS.dead:
      return <ErrorOutlineIcon sx={{ color: STATUS_COLORS.dead }}/>
    default:
      return <HelpIcon />
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {Icon()}
      </div>
      <div className={styles.status}>
        {status}
      </div>
    </div>
  )
}