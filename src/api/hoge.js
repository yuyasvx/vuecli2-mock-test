export default {
  /**
   * @returns {Promise<string>} 返却値
   */
  executeApi(param1) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`${param1}: OK!`)
      }, 1000)
    })
  }
}
