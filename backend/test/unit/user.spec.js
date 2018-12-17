'use strict'

const { test, after } = use('Test/Suite')('Model user')
const User = use('App/Models/User')

after(async () => {
    await User.query().delete()
})
test('Save user in database', async ({ assert }) => {
    let user = new User({name:'Jairo',location:[121221,232323],email:'test@gmail.com'});
    await user.save()
    let user_ = await User.find(user._id)
    assert.equal(user.name,user_.name)
})

test('get user by name in database', async ({ assert }) => {
    let user
    try {
        user = await User.findBy('name', 'Jairo')
    } catch (e) {
        console.error(e);
    }
    assert.equal(user.email,'test@gmail.com')
})