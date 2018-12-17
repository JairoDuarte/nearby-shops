'use strict'

const Model = use('Model')

class Shop extends Model {
    /**
     * list of users like the site 
     */
  usersLike () {
    return this.embedsMany('App/Models/User', '', 'usersLike')
  }
  /**
     * list of users dislike the site 
     */
  usersDislike () {
    return this.embedsMany('App/Models/User', '', 'usersDislike')
  }
}

module.exports = Shop
