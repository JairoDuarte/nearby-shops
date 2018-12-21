'use strict'

const BaseValidator = require('./BaseValidator')

class Shop extends BaseValidator {
	get rules () {
		return {
			name: 'required',
			address: 'required',
			photo:'required'
		}
	}
}

module.exports = Shop
