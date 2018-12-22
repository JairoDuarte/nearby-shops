'use strict'

const { test, after } = use('Test/Suite')('Model shop')
const Shop = use('App/Models/Shop')

after(async () => {
	await Shop.query().delete()
})
test('Save shop in database', async ({ assert }) => {
	let shop = new Shop({name:'Apple Store',position:{latitude:121221,longitude:232323}})
	await shop.save()
	let shop_ = await Shop.find(shop._id)
	assert.equal(shop.name,shop_.name)
})

test('get shop by name in database', async ({ assert }) => {
	let shop
	try {
		shop = await Shop.findBy('name', 'Apple Store')
	} catch (e) {
		console.error(e)
	}
	assert.equal(shop.position.latitude,121221)
	assert.equal(shop.position.longitude,232323)
})