const User = require('../models/user.model')

module.exports = {

    ADD_USER: async function (payload) {

        try {

            const [_status, userExists] = await this.checkUsernameExists(req.body.username)

            if (!_status || userExists) return res.json({ status: userExists, error: "Username already exists" })

            // req.body.username = generateUsername(req.body.username)

            const [status, message] = await USER_REPO.ADD_USER(req.body)

            if (!status) return res.json({ status, error: message })

            return res.status(200).json({ status, message })
        }

        catch (e) {

            return [false, e.message]
        }
    },

    UPDATE_USER: async function (payload) {

        try {

            const { username } = payload

            await User.findOneAndUpdate({ username }, payload)

            return [true, "User updated successfully"]
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

            if (!_user) return [true, false]

            return [true, _user.username === username]
        }

        catch (e) {

            return [false, e.message]
        }
    },
}