'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const Helpers = use('Helpers')

const Env = use('Env')
Route.get('/', () => ({ greeting: 'Nearby Shops API - Coding challenge United Remote' }))
use('require-all')(`${Helpers.appRoot()}/app/Routes`)
Route.any('*', ({response}) => response.download(Helpers.publicPath('index.html')))