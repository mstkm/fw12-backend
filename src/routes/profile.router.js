const profileRouter = require('express').Router()
const { readProfile, updateProfile, createTransaction, readTransactionById } = require('../controllers/profile.controller')
const uploadMiddleware = require('../middleware/upload.middleware')

profileRouter.get('/', readProfile)
profileRouter.patch('/', uploadMiddleware, updateProfile)
profileRouter.post('/', createTransaction)
profileRouter.get('/transaction/details/:id', readTransactionById)

module.exports = profileRouter
