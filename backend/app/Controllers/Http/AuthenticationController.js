'use strict'

const User = use('App/Models/User')
const crypto = use('crypto')
const uuid = use('uuid')
const Event = use('Event')

class AuthenticationController {

	/**
     * 
     * User register
     */
	async signup ({ request, response }) {
		let user = new User(request.only(['email', 'password','name']))
		const verificationToken = crypto.createHash('sha256').update(uuid.v4()).digest('hex')
		user.merge({verificationToken, verified: false})
		try {
			await user.save()
			Event.fire('new::user', user)
			return response.status(201).json({ message: 'User add with success.' })
		} catch (error) {
			return response.status(500).json({ error })
		}
	}

	/**
     * 
     * User connect in application
     */
	async signin ({ request, response, auth }) {
		const email = request.input('email')
		const password = request.input('password')
		let data = null
		let user

		try {
			data = await auth.withRefreshToken().attempt(email, password)
			user = await User.findBy({ email })
			user.dislikesShops = user.dislikesShops == undefined ? [] : user.dislikesShops 
			user.likesShops = user.likesShops == undefined ? [] : user.likesShops
		} catch (error) {
			return response.status(404).json({ message: 'email or password is invalid', error })
		}

		if (!user.verified) {
			return response.status(404).json({ message: 'your account has not yet activated, please confirm your email' })
		}
		data.user = user
		response.status(201).json({ data })
	}
	
	/**
     * 
     * generating a new jwt token
     */
	async refresh ({ request, response, auth }) {
		let data

		try {
			data = await auth.newRefreshToken().generateForRefreshToken(request.input('refresh_token'))
			data.user = await auth.user
		} catch (e) {
			return response.status(404).json({ message: 'user not existent', e})
		}
		return response.status(201).json({data})
	}

	/**
     * 
     * User logout
     */
	async signout ({ request, response, auth }) {
		const refreshToken = request.input('refreshToken')
		if(!refreshToken){
			return response.status(404).send('Refresh Token missing')
		}

		await auth
			.authenticator('jwt')
			.revokeTokens([refreshToken], true)

		return response.status(200).send('success')
	}
  
	// 
	/**
     * resend verification token of email
     * 
     */
	async sendVerification ({ request, response }) {
		let user = await User.findBy({ email: request.input('email') })
		if (!user) {
			return response.status(404).json({ message: ` ${request.input('email')} not found` })
		}
		const verificationToken = crypto.createHash('sha256').update(uuid.v4()).digest('hex')
		user.verificationToken = verificationToken
		await user.save()
		Event.fire('new::user', user)
		return response.status(200).json({ message: 'Email send with success' })
	}
	
	/**
     * 
     * Verify token send from user email
     */
	async verify ({ request, response }) {
		const token = request.input('token')
		let user = await User.findBy({ verificationToken: token })
		if (!user) {
			return response.status(404).json({ message: 'token invalid' })
		}
		user.verified = true
		user.unset('verificationToken')
		await user.save()
		return response.status(200).json({ message: 'Account verified successfully.' })
	}
}

module.exports = AuthenticationController
