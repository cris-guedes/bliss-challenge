import axios from 'axios'
import envs from '@/shared/configs/envs'

const httpProvider = axios.create({
  baseURL: envs.API.BASE_URL
})

export default httpProvider
