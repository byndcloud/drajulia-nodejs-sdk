import DocumentModels from './DocumentModels'
import Document from './Document'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api-production-tyxxtz2vcq-uc.a.run.app/api/v1'
})

const documentModels = new DocumentModels(axiosInstance)
const document = new Document(axiosInstance)

export { documentModels, document }
