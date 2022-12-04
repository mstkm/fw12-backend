const castsRouter = require('express').Router()
const {createCast, readAllCasts, readCast, updateCast, deleteCast} = require('../controllers/casts.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data cast (Create)
castsRouter.post('/', authMiddleware, createCast)

// Membaca semua data cast (Read)
castsRouter.get('/', readAllCasts)
// Membaca data cast berdasarkan id (Read)
castsRouter.get('/:id', readCast)

// Mengupdate data cast (Update)
castsRouter.patch('/:id', authMiddleware, updateCast)

// Menghapus data cast (Delete)
castsRouter.delete('/:id', authMiddleware, deleteCast)

module.exports = castsRouter
