class BaseValidator {
  async fails (errorMessages) {
    const { request, response } = this.ctx
    if (request.url().indexOf('/api/') === 0) {
      return response.status(400).json({
        message: 'Validation fields erreurs',
        error: errorMessages
      })
    }

    request.withAll().andWith({ errors: errorMessages }).flash()
    return response.redirect('back')
  }
}

module.exports = BaseValidator
