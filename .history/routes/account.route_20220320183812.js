const express = require('express')
const router = express.Router()
const accountService = require('../service/account.service')

router.post('/create-account', accountService.createAccount)

module.exports = router