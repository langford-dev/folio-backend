const express = require('express')
const router = express.Router()
const controller = require('../service/user.service')

router.post('/add-user', controller.addUser)
router.post('/update-user', controller.updateUser)
router.get('/get-user/:username', controller.getUser)
router.get('/check-username-exists/:username', controller.checkUsernameExists)

module.exports = router