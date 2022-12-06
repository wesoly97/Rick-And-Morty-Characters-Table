import React from 'react'
import { HeaderProps } from '@/app/characters/components/header/header.types'
import styles from './header.module.scss'

export const Header = ({ text }:HeaderProps) => <h1 className={styles.header}>{text}</h1>