import axios from 'axios'
import { axiosConfig } from '@/config/axios/axiosConfig'
import { getPaginatedDataProps } from '@/utils/api/getPaginatedData.types'

export const getPaginatedData = async ({ endpoint, page }:getPaginatedDataProps) => {
  const { data } = await axios.get(endpoint, {
    params: {
      page
    },
    ...axiosConfig
  })
  return data
}