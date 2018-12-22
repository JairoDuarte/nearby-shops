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
Route.post('/test', () => ({ greeting: 'Hello world in JSON' }))
Route.get('/test', async ({ request,response }) => {
    let t = Env.get('USER')

    return response.status(200).json({ t})
})
use('require-all')(`${Helpers.appRoot()}/app/Routes`)
Route.any('*', ({response}) => response.download(Helpers.publicPath('index.html')))