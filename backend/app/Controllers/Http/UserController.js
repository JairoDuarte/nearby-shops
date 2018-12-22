'use strict'

const Shop = use('App/Models/Shop')
class UserController {

	/**
	 * return all information about user
	 */
	async me ({ response, auth }) {
		const user = auth.user
		user.dislikesShops = user.dislikesShops == undefined ? [] : user.dislikesShops 
		user.likesShops = user.likesShops == undefined ? [] : user.likesShops
		return response.status(200).json({ user })
	}
	/**
	 * 
	 * returns a list of the preferred shops of the current user
	 */
	async getPreferredShops ({ response, auth }) {
		const user = auth.user
		let shops = await user.likesShops().fetch()
		shops = shops == undefined ? [] : shops
		return response.status(200).json({ likesShops:shops })
	}
	/**
	 * returns a list of the disliked shops of the current user
	 * 
	 */
	async getDislikeShops ({ response, auth }) {
		const user = auth.user
		let shops = await user.dislikesShops().fetch()
		shops = shops == undefined ? [] : shops
		return response.status(200).json({ dislikesShops:shops })
	}

	/**
     * 
     * add a specific shop into the preferred shops list of user
     */
	async addLikeShop ({ request, response, auth }) {
		let user = auth.user
		let shop = new Shop(request.only(['id','name','photos' ,'address']))
		try {
			await user.likesShops().save(shop)
		} catch (error) {
			return response.status(500).json({error})
		}
		let likesShops = user.likesShops().fetch()
		return response.status(201).json({likesShops})
	}
	/**
     * 
     * added dislike shop by user in list of preferred shops 
     */
	async addDislikeShop ({ request, response, auth }) {
		let user = auth.user
		let shop = new Shop(request.only(['id','name','photos','address']))
		shop.created_at = new Date()
       
		try {
			await user.dislikesShops().save(shop)
		} catch (error) {
			return response.status(500).json({error})
		}
		let dislikesShops = user.dislikesShops().fetch()
		return response.status(201).json({dislikesShops:dislikesShops})
	}
	/**
     * 
     * remove a shop from preferred shops 
     */
	async removeShop ({ response, auth,params }) {
		let user = auth.user
       
		try {
			await user.likesShops().delete(params.id)
		} catch (error) {
			return response.status(500).json({error})
		}
		let likesShops = user.likesShops().fetch()
		return response.status(200).json({likesShops})
	}

}

module.exports = UserController
