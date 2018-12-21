'use strict'

const User = use('App/Models/User')
const Shop = use('App/Models/Shop')

{
	const { beforeEach,test, afterEach, trait } = use('Test/Suite')('User controller Test')

	trait('Test/ApiClient')
	trait('Auth/Client')

	beforeEach(async () => {
		let user = new User({ email: 'test@gmail.com', password: '123456',name:'Teste' })
		user.verified = true
		await user.save()
	})
	afterEach(async () => {
		await User.query().delete()
    })
    test('Get user, return all information about user', async ({ client, assert }) => {
		let user = await User.first()
		const response = await client
			.get('api/users/me')
			.loginVia(user, 'jwt')
			.accept('json')
			.end()
		response.assertStatus(200)
		assert.equal(response.body.user.name,'Teste')
	})
	test('User add like shop', async ({ client, assert }) => {
		let user = await User.first()
		const response = await client
			.post('api/users/addlike')
			.loginVia(user, 'jwt')
			.send({name:'Zara Casa',address:'Casablanca',photo:'imp.jpg',id:1222})
			.accept('json')
			.end()
		response.assertStatus(201)
		assert.equal(response.body.likesShops[0].name,'Zara Casa')
	})
	test('User add dislike shop', async ({ client, assert }) => {
		let user = await User.first()
		const response = await client
			.post('api/users/adddislike')
			.loginVia(user, 'jwt')
			.send({name:'Zara Casa',address:'Casablanca',photo:'imp.jpg',id:1222})
			.accept('json')
			.end()
		response.assertStatus(201)
		assert.equal(response.body.dislikesShops[0].name,'Zara Casa')
	})
	test('User remove shop from preferred list', async ({ client, assert }) => {
		let user = await User.first()
		await user.likesShops().save(new Shop({name:'Zara Casa',address:'Casablanca',photo:'imp.jpg',id:1222}))
		await user.likesShops().save(new Shop({name:'Apple ',address:'Casablanca',photo:'imp.jpg',id:12215645642}))
		let shops = (user.likesShops().fetch()).toJSON()
		const response = await client
			.get(`api/users/removeshop/${shops[0]._id}`)
			.loginVia(user, 'jwt')
			.accept('json')
			.end()
		response.assertStatus(200)
		assert.equal(response.body.likesShops[0].name,shops[1].name)
	})

  
}
