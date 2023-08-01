import axios from 'axios'
import { config } from '../config/config'

export const axiosPublic = axios.create({
    baseURL: config.api.url,
    headers: {
        'Content-Type': 'application/json',
    },
})
