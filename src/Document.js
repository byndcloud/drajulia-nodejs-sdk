import PublicDocument from './PublicDocument'

export default class Document extends PublicDocument {
    constructor(axios, authToken) {
        super(axios)
        this.authToken = authToken
    }

    createAndGenerate({ newDocName, modelId, itemsForReplace, othersOptionContent, typesToGenerate }) {
        const params = {
            newDocName: newDocName,
            modelId: modelId,
            itemsForReplace: itemsForReplace,
            othersOptionContent: othersOptionContent,
            typesToGenerate: typesToGenerate
        }
        return this.axios.post(
            '/document/',
            params, 
            {
                headers: {
                    'Authorization': `Bearer ${this.authToken}`
                }
            }
        )
    }
}