import PublicDocumentModels from './PublicDocumentModels'

export default class DocumentModels extends PublicDocumentModels {
    constructor(axios, authToken) {
        super(axios)
        this.authToken = authToken
    }
}