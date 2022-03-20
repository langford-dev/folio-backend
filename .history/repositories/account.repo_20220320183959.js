const User = require('../models/user.model')

module.exports = {

    CREATE_ACCOUNT: async function (payload) {

        try {

            const [_status, userExists] = await this.CHECK_USERNAME_EXISTS(payload.username)

            if (!_status || userExists) return [false, "User with username already exists"]

            await new User(payload).save()

            return [true, "User added successfully"]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    CHECK_USERNAME_EXISTS: async function (username) {

        try {

            const _user = await User.findOne({ username })

            if (!_user) return [true, false]

            return [true, _user.username === username]
        }

        catch (e) {

            return [false, e.message]
        }
    },
}