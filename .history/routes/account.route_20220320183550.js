const express = require('express')
const router = express.Router()
const accountService = require('../service/user.service')

router.post('/create-account', accountService.createAccount)

module.exports = router