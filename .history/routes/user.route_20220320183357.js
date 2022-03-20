const express = require('express')
const router = express.Router()
const userService = require('../service/user.service')

router.post('/add-user', userService.addUser)
router.post('/update-user', userService.updateUser)
router.post('/update-user', userService.updateUser)
router.get('/get-user/:username', userService.getUser)
router.get('/check-username-exists/:username', userService.checkUsernameExists)

module.exports = router