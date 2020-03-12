import PublicDocumentModels from './PublicDocumentModels'
import DocumentModels from './DocumentModels'
import PublicDocument from './PublicDocument'
import Document from './Document'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api-production-tyxxtz2vcq-uc.a.run.app/api/v1'
})

export default class DraJuliaNodejsSdk {
    constructor(authToken) {
        if (authToken) {
            this.documentModels = new DocumentModels(axiosInstance, authToken)
            this.document = new Document(axiosInstance, authToken)
        } else {
            this.documentModels = new PublicDocumentModels(axiosInstance)
            this.document = new PublicDocument(axiosInstance)
        }
    }
}