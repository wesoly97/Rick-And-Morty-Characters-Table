import { SelectProps } from '@mui/material'

export type SelectMuiProps<T> = { data: T[] } & SelectProps<T>