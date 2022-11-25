const cinemasRouter = require('express').Router()
const {createCinema, readAllCinemas, readCinema, updateCinema, deleteCinema} = require('../controllers/cinemas.controller')

// Membuat data cinema (Create)
cinemasRouter.post('/', createCinema)

// Membaca data semua cinema (Read)
cinemasRouter.get('/', readAllCinemas)
// Membaca data cinema berdasarkan id (Read)
cinemasRouter.get('/:id', readCinema)

// Mengupdate data cinema (Update)
cinemasRouter.patch('/:id', updateCinema)

// Menghapus data cinema (Delete)
cinemasRouter.delete('/:id', deleteCinema)

module.exports = cinemasRouter
