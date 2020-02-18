export default class Document {
    constructor(axios) {
        this.axios = axios
    }

    generateFiles(docId, itemsForReplace, othersOptionContent) {
        return this.axios.post(
            '/embedding/generatefiles',
            {
                "docId": docId,
                "itemsForReplace": itemsForReplace,
                "othersOptionContent": othersOptionContent
            }
        )
    }

    create(creationToken, newDocName, parentModelId, onFilesGeneratedCallbackUrl) {
        return this.axios.post(
            '/embedding/createdoc',
            {
                creationToken: creationToken,
                newDocName: newDocName,
                parentModelId: parentModelId,
                onFilesGeneratedCallbackUrl: onFilesGeneratedCallbackUrl
            }
        )
    }
}