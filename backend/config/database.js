'use strict'

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with Mongodb databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'mongodb'),
  /* ------------------------------------------------------------------------- */

  mongodb: {
    client: 'mongodb',
    connectionString: Env.get('DB_CONNECTION_STRING', ''),
    connection: {
      connectionString: Env.get('DB_CONNECTION_STRING', ''),
      host: Env.get('DB_HOST'),
      port: Env.get('DB_PORT'),
      username: Env.get('DB_USER'),
      password: Env.get('DB_PASSWORD'),
      database: Env.get('DB_DATABASE'),
      options: {}
    }
  }
}
