import React from 'react'
import { AvatarProps } from '@/ui/avatar/avatar.types'
import styles from './avatar.module.scss'

export const Avatar = ({ src }:AvatarProps) => (
  <div className={styles.avatarContainer}>
    <img height={50} src={src}/>
  </div>
)