const express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller')

router.post('/add-user', controller.addUser)
router.get('/get-user/:username', controller.getUser)
router.get('/get-user/:username', controller.getUser)

module.exports = router