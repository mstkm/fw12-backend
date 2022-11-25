const subscribersRouter = require('express').Router()
const {createSubscriber, readAllSubscriber, readSubscriber, updateSubscriber, deleteSubscriber} = require('../controllers/subscribers.controller')

// Membuat data subscriber (Create)
subscribersRouter.post('/', createSubscriber)

// Membaca data subscribers (Read)
subscribersRouter.get('/', readAllSubscriber)
// Membaca data subscribers berdasarkan id (Read)
subscribersRouter.get('/:id', readSubscriber)

// Mengupdate data subscriber (Update)
subscribersRouter.patch('/:id', updateSubscriber)

// Menghapus data subscriber (Delete)
subscribersRouter.delete('/:id', deleteSubscriber)

module.exports = subscribersRouter
