import DocumentModels from './DocumentModels'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api-production-tyxxtz2vcq-uc.a.run.app/api/v1'
})

const documentModels = DocumentModels(axiosInstance)

export { documentModels }