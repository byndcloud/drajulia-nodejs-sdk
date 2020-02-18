export default class DocumentModels {
  constructor (axios) {
    this.axios = axios
  }

  /**
   * Lists all document models
   */
  static async list() {
    return 'lista'
  }
}