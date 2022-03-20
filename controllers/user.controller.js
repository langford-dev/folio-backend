const { GET_USER } = require('../services/user.service')
const User = require('../models/user.model')

const generateUsername = (name) => {
    return '@' + (name.split(/\s+/).join("") + (Math.random() * 1000).toFixed(0)).toLocaleLowerCase()
}

module.exports = {

    addUser: async function (req, res) {
        let { username } = req.body
        let newUser = await new User(req.body)
        newUser.username = generateUsername(username)
        newUser.save()

        res.send(newUser)
    },

    getUser: (req, res) => {
        res.send(generateUsername(req.body.name))
    },
}