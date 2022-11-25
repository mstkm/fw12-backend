const castsRouter = require('express').Router()
const {createCast, readAllCasts, readCast, updateCast, deleteCast} = require('../controllers/casts.controller')

// Membuat data cast (Create)
castsRouter.post('/', createCast)

// Membaca semua data cast (Read)
castsRouter.get('/', readAllCasts)
// Membaca data cast berdasarkan id (Read)
castsRouter.get('/:id', readCast)

// Mengupdate data cast (Update)
castsRouter.patch('/:id', updateCast)

// Menghapus data cast (Delete)
castsRouter.delete('/:id', deleteCast)

module.exports = castsRouter
