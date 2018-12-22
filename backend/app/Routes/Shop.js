const Route = use('Route')
Route.group('shops', () => {
	Route.get('/:lat/:long', 'ShopController.getAll').middleware(['auth:jwt'])
}).prefix('/api/shops')