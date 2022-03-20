const User = require('../models/user.model')

const generateUsername = (name) => {
    return '@' + (name.split(/\s+/).join("") + (Math.random() * 1000).toFixed(0)).toLocaleLowerCase()
}

module.exports = {

    ADD_USER: async function (payload) {

        try {

            let newUser = new User(payload).save()

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
}