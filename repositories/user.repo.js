const User = require('../models/user.model')

module.exports = {

    ADD_USER: async function (payload) {

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

    UPDATE_USER: async function (payload) {

        try {

            const { email } = payload

            console.log("updating, ", email)

            await User.findOneAndUpdate({ email }, payload)

            return [true, "User updated successfully"]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    GET_USER: async function (email) {

        try {

            console.log("email >> ", email)

            let user = await User.findOne({ email })

            console.log("get user ", user)

            if (!user) return [false, "User not found"]

            return [true, user]
        }

        catch (e) {

            return [false, e.message]
        }
    },

    GET_USER_BY_USERNAME: async function (username) {

        try {

            console.log("username >> ", username)

            let user = await User.findOne({ username })

            console.log("🚗 ", user)

            if (!user) return [false, "User not found"]

            return [true, user]
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