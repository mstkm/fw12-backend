const profileRouter = require('express').Router()
const { readProfile, updateProfile, createTransaction } = require('../controllers/profile.controller')
const uploadMiddleware = require('../middleware/upload.middleware')


profileRouter.get('/', readProfile)
profileRouter.patch('/', uploadMiddleware, updateProfile)
profileRouter.post('/', createTransaction)

module.exports = profileRouter
