const express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller')

router.post('/add-user', controller.addUser)
router.get('/get-user', controller.getUser)

module.exports = router