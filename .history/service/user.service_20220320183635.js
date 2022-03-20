const ACCOUNT_ = require("../repositories/user.repo")

module.exports = {

    createAccount: async function (req, res) {

        try {

            let { username } = req.body

            req.body.username = formatUsername(username)

            const [status, message] = await ACCOUNT_.ADD_USER(req.body)

            if (!status) return res.json({ status: status, error: message })

            return res.status(200).json({ status, message })
        }

        catch (e) {

            return res.json({ status: false, error: e.message })
        }
    },
}