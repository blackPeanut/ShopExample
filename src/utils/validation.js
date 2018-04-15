const validation = {
  isEmailAddress: function (str) {
    // eslint-disable-next-line no-useless-escape
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return pattern.test(str) // returns a boolean
  },
  isNotEmpty: function (str) {
    const pattern = /\S+/
    return pattern.test(str) // returns a boolean
  },
  isNumber: function (str) {
    const pattern = /^\d+$/
    return pattern.test(str) // returns a boolean
  }
}

export default validation
