'use strict'

const BaseValidator = require('./BaseValidator')

class Shop extends BaseValidator {
	get rules () {
		return {
			name: 'required',
			address: 'required',
			photos:'required'
		}
	}
}

module.exports = Shop
