const Event = use('Event')
const Mail = use('Mail')
const Env = use('Env')

Event.on('new::user', async user => {
	try {
		await Mail.send('emails.verification', { user }, message => {
			message.to(user.email)
			message.from(Env.get('MAIL_SENDER'))
			message.subject('Nearby Shops -  Welcome')
		})
	} catch (error) {
		console.log(error)
	}
})