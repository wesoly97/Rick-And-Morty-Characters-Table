import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'

export const Input = ({ value, onChange, className, ...props }:TextFieldProps) => (
  <TextField
    value={value}
    onChange={onChange}
    variant={'outlined'}
    className={className}
    {...props}
  />
)