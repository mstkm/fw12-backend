const cinemasRouter = require('express').Router()
const {createCinema, readAllCinemas, readCinema, updateCinema, deleteCinema} = require('../controllers/cinemas.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data cinema (Create)
cinemasRouter.post('/', authMiddleware, createCinema)

// Membaca data semua cinema (Read)
cinemasRouter.get('/', readAllCinemas)
// Membaca data cinema berdasarkan id (Read)
cinemasRouter.get('/:id', readCinema)

// Mengupdate data cinema (Update)
cinemasRouter.patch('/:id', authMiddleware, updateCinema)

// Menghapus data cinema (Delete)
cinemasRouter.delete('/:id', authMiddleware, deleteCinema)

module.exports = cinemasRouter
