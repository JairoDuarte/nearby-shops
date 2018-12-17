const Route = use('Route')
Route.group('usuario', () => {
	Route.post('/signin', 'UserController.signin').validator('UserLogin')
	Route.post('/signup', 'UserController.signup').validator('UserRegister')
	Route.get('/sendverification', 'UserController.sendVerification')
	Route.post('/signout', 'UserController.signout')
}).prefix('/api/user')