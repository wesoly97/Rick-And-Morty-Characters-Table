import React from 'react'
import { MainLayoutProps } from '@/layouts/mainLayout/mainLayout.types'
import styles from './mainLayout.module.scss'

export const MainLayout = ({ children }:MainLayoutProps) => <div className={styles.container}>{children}</div>
