const Route = use('Route')
Route.group('authentification', () => {
	Route.post('/signin', 'AuthenticationController.signin').validator('UserLogin')
	Route.post('/signup', 'AuthenticationController.signup').validator('UserRegister')
	Route.get('/sendverification', 'AuthenticationController.sendVerification')
	Route.post('/signout', 'AuthenticationController.signout')
}).prefix('/api/auth')
Route.get('auth/verify', 'AuthenticationController.verify').as('verification')