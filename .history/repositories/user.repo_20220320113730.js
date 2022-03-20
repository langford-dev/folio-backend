const User = require('../models/user.model')

module.exports = {

    ADD_USER: async function (payload) {

        try {

            await new User(payload).save()

            return [true, "User added successfully"]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    GET_USER: async function (username) {

        try {

            let user = await User.findOne({ username })

            return [true, user]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    CHECK_USERNAME_EXISTS: async function (username) {

        try {

            const _user = await User.findOne({ username })

            
            console.log(_user.username === username)

            return [true, _user]
        }

        catch (e) {

            return [false, e.message]
        }
    },
}