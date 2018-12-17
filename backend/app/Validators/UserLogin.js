'use strict'

const BaseValidator = require('./BaseValidator')

class User extends BaseValidator {
	get rules () {
		return {
			email: 'required|email',
			password: 'required|min:8|max:256'
		}
	}
}

module.exports = User
