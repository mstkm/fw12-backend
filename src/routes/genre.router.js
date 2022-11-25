const genreRouter = require('express').Router()
const {createGenre, readAllGenres, readGenre, updateGenre, deleteGenre} = require('../controllers/genre.controller')

// Membuat data genre (Create)
genreRouter.post('/', createGenre)

// Membaca data semua genre (Read)
genreRouter.get('/', readAllGenres)
// Membaca data genre berdasarkan id (Read)
genreRouter.get('/:id', readGenre)

// Mengupdate data genre (Update)
genreRouter.patch('/:id', updateGenre)

// Mengahpus data genre (Delete)
genreRouter.delete('/:id', deleteGenre)


module.exports = genreRouter
