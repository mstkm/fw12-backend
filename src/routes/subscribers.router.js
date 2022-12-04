const subscribersRouter = require('express').Router()
const {createSubscriber, readAllSubscriber, readSubscriber, updateSubscriber, deleteSubscriber} = require('../controllers/subscribers.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data subscriber (Create)
subscribersRouter.post('/', authMiddleware, createSubscriber)

// Membaca data subscribers (Read)
subscribersRouter.get('/', authMiddleware, readAllSubscriber)
// Membaca data subscribers berdasarkan id (Read)
subscribersRouter.get('/:id', authMiddleware, readSubscriber)

// Mengupdate data subscriber (Update)
subscribersRouter.patch('/:id', authMiddleware, updateSubscriber)

// Menghapus data subscriber (Delete)
subscribersRouter.delete('/:id', authMiddleware, deleteSubscriber)

module.exports = subscribersRouter
