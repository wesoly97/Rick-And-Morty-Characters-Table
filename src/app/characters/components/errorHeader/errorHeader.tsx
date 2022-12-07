import React from 'react'
import { ErrorHeaderProps } from '@/app/characters/components/errorHeader/errorHeader.types'
import styles from './errorHeader.module.scss'

export const ErrorHeader = ({ text }:ErrorHeaderProps) => <h2 className={styles.header}>{text}</h2>