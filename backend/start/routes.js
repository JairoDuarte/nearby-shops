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

Route.get('/', ({ request }) => ({ greeting: `Hello world in JSON ${use('Helpers').appRoot()}/../app/Routes` }))
Route.get('/test', ({ request }) => ({ greeting: `Hello world in JSON ` }))
use('require-all')(`${use('Helpers').appRoot()}/app/Routes`)
Route.any('*', ({response}) => response.download(Helpers.publicPath('index.html')))