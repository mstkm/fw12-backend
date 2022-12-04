const statusRouter = require('express').Router()
const {createStatus, readAllStatus, readStatus, updateStatus, deleteStatus} = require('../controllers/status.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data status (Create)
statusRouter.post('/', authMiddleware, createStatus)

// Membaca data status (Read)
statusRouter.get('/', authMiddleware, readAllStatus)
// Membaca data status berdasarkan id (Read)
statusRouter.get('/:id', authMiddleware, readStatus)

// Mengupadte data status (Update)
statusRouter.patch('/:id', authMiddleware, updateStatus)

// Menghapus data status (Delete)
statusRouter.delete('/:id', authMiddleware, deleteStatus)

module.exports = statusRouter
