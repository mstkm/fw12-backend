const genreRouter = require('express').Router()
const {createGenre, readAllGenres, readGenre, updateGenre, deleteGenre} = require('../controllers/genre.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data genre (Create)
genreRouter.post('/', authMiddleware, createGenre)

// Membaca data semua genre (Read)
genreRouter.get('/', readAllGenres)
// Membaca data genre berdasarkan id (Read)
genreRouter.get('/:id', readGenre)

// Mengupdate data genre (Update)
genreRouter.patch('/:id', authMiddleware, updateGenre)

// Mengahpus data genre (Delete)
genreRouter.delete('/:id', authMiddleware, deleteGenre)


module.exports = genreRouter
