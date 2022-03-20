const express = require('express')
const router = express.Router()
const userService = require('../service/user.service')

router.post('/create-account', userService.addUser)

module.exports = router