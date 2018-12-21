'use strict'
const Env = use('Env')

const googleMaps = require('@google/maps').createClient({
	key: Env.get('GOOGLE_MAP_KEY'),
	Promise: Promise
})

class ShopController {

    	/**
     * 
     * User register
     * request in google map shops by user location and 
     * return all shops ranked by distance
     * ['supermarket','shoe_store','shopping_mall','store']
     */
	async getAll ({ response,params }) {
		try {
			const shops = await googleMaps.placesNearby({
				location: [params.lat, params.long],
				rankby: 'distance',
				type: 'store'
			}).asPromise()
			return response.status(200).json({ shops:shops.json.results})

		} catch (error) {
			return response.status(404).json({ message: 'Shops not found ',error})
		}
	}


}

module.exports = ShopController
