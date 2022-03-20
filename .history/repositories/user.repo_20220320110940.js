const User = require('../models/user.model')

const generateUsername = (name) => {
    return '@' + (name.split(/\s+/).join("") + (Math.random() * 1000).toFixed(0)).toLocaleLowerCase()
}

module.exports = {

    ADD_USER: async function (payload, formattedUsername) {

        try {

            let newUser = new User(payload)
            newUser.formattedUsername = generateUsername(username)

            await newUser.save()

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