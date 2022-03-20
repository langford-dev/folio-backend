const express = require('express')
const router = express.Router()
const userService = require('../service/user.service')

router.post('/add-user', userService.addUser)

module.exports = router