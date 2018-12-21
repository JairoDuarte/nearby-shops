const Route = use('Route')
Route.group('shops', () => {
	Route.get('/me', 'UserController.me').middleware(['auth:jwt'])
	Route.post('/addlike', 'UserController.addLikeShop').middleware(['auth:jwt']).validator('ShopAdd')
	Route.post('/adddislike', 'UserController.addDislikeShop').middleware(['auth:jwt']).validator('ShopAdd')
	Route.get('/removeshop/:id', 'UserController.removeShop').middleware(['auth:jwt'])
}).prefix('/api/users')