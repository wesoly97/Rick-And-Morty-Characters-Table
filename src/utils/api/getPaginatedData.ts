import axios from 'axios'
import { axiosConfig } from '@/config/axios/axiosConfig'
import { getPaginatedDataProps } from '@/utils/api/getPaginatedData.types'

export const getPaginatedData = async <T,>({ endpoint, params }:getPaginatedDataProps<T>) => {
  const { data } = await axios.get(endpoint, {
    params,
    ...axiosConfig
  })
  return data
}