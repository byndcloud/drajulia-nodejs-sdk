export default class DocumentModels {
  constructor (axios) {
    this.axios = axios
  }

  /**
   * Lists all document models
   */
  list() {
    return this.axios.get('/public/documentmodels')
  }
}