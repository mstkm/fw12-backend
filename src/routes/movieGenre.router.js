const movieGenreRouter = require('express').Router()
const {createMovieGenre, readAllMovieGenre, readMovieGenre, updateMovieGenre, deleteMovieGenre} = require('../controllers/movieGenre.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data movieGenre (Create)
movieGenreRouter.post('/', authMiddleware, createMovieGenre)

// Membaca data movieGenre (Read)
movieGenreRouter.get('/', readAllMovieGenre)
// Membaca data movieGenre berdasarkan id (Read)
movieGenreRouter.get('/:id', readMovieGenre)

// Mengupdate data movieGenre (Update)
movieGenreRouter.patch('/:id', authMiddleware, updateMovieGenre)

// Menghapus data movieGenre (Delete)
movieGenreRouter.delete('/:id', authMiddleware, deleteMovieGenre)

module.exports = movieGenreRouter
