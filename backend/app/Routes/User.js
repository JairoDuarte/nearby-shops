const Route = use('Route')
Route.group('shops', () => {
    Route.get('/me', 'UserController.me').middleware(['auth:jwt'])
    Route.get('/likeshops', 'UserController.getPreferredShops').middleware(['auth:jwt'])
    Route.get('/dislikeshops', 'UserController.getDislikeShops').middleware(['auth:jwt'])
	Route.post('/addlike', 'UserController.addLikeShop').middleware(['auth:jwt']).validator('ShopAdd')
	Route.post('/adddislike', 'UserController.addDislikeShop').middleware(['auth:jwt']).validator('ShopAdd')
	Route.delete('/removeshop/:id', 'UserController.removeShop').middleware(['auth:jwt'])
}).prefix('/api/users')