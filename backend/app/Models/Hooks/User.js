'use strict'

const Hash = use('Hash')
const UserHook = module.exports = {}

/**
 * Hash using password as a hook.
 *
 * @method
 *
 * @param  {Object} userInstance
 *
 * @return {void}
 */
UserHook.hashPassword = async userInstance => {
	if (userInstance.password) {
		userInstance.password = await Hash.make(userInstance.password)
	}
}
/**
 * hook for delete a shop from disliked shops
 *
 * @method
 *
 * @param  {Object} userInstance
 *
 * @return {void}
 */
UserHook.removeDislikedShop = async userInstance => {
	let shops = (userInstance.dislikesShops().fetch()).toJSON()
	for (let i = 0; i < shops.length; i++) {
		const shop = shops[i]
		let time = new Date()
		let timeCreated = new Date(shop.created_at)
		let timeNotDisplayed = ((time - timeCreated)/1000)/60
		if (timeNotDisplayed >= 120) {
			await userInstance.dislikesShops().delete(shop._id)
			break
		}
	}
}
