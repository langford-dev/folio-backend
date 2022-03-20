const USER_REPO = require("../repositories/user.repo")

const formatUsername = (name) => {
    return (name.split(/\s+/).join("") + (Math.random() * 1000).toFixed(0)).toLocaleLowerCase()
}

module.exports = {

    addUser: async function (req, res) {

        try {

            (req.body.username).toLocaleLowerCase().split(/\s+/).join("")

            const [status, message] = await USER_REPO.ADD_USER(req.body)

            if (!status) return res.json({ status: status, error: message })

            return res.status(200).json({ status, message })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    updateUser: async function (req, res) {

        try {

            const [status, message] = await USER_REPO.UPDATE_USER(req.body)

            if (!status) return res.json({ status, error: message })

            return res.status(200).json({ status, message })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    getUser: async function (req, res) {

        try {

            const [status, payload] = await USER_REPO.GET_USER(req.params.username)

            if (!status) return res.json({ status, error: payload })

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },

    checkUsernameExists: async function (req, res) {

        try {

            const [status, payload] = await USER_REPO.CHECK_USERNAME_EXISTS(req.params.username)

            return res.status(200).json({ status, payload })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },
}