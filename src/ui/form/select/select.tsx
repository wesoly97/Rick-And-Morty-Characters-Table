import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { SelectMuiProps } from '@/ui/form/select/select.types'

export const SelectMui = <T,>({ data, value, onChange, sx }:SelectMuiProps<T>) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      sx={sx}
    >
      {data.map((item, index) => (
        <MenuItem key={index} value={item as string}>
          {item as string}
        </MenuItem>
      ))}
    </Select>
  )
}