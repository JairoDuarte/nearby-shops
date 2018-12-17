'use strict'

const Model = use('Model')

class User extends Model {
  static get createTimestamp () { return 'createdAt' }
  static get updateTimestamp () { return 'updatedAt' }
  static get deleteTimestamp () { return 'deletedAt' }
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/User.js` file to
     * check the hashPassword method
     */
    this.addHook('beforeCreate', 'User.hashPassword')
  }
  likesShops () {
    return this.hasMany('App/Models/Evento', '_id', 'organizadorId')
  }
  dislikesShops () {
    return this.hasMany('App/Models/Evento', '_id', 'organizadorId')
  }
  
  static get hidden () {
    return ['password', 'verified', 'verificationToken']
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}
module.exports = User
