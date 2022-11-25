const movieGenreRouter = require('express').Router()
const {createMovieGenre, readAllMovieGenre, readMovieGenre, updateMovieGenre, deleteMovieGenre} = require('../controllers/movieGenre.controller')

// Membuat data movieGenre (Create)
movieGenreRouter.post('/', createMovieGenre)

// Membaca data movieGenre (Read)
movieGenreRouter.get('/', readAllMovieGenre)
// Membaca data movieGenre berdasarkan id (Read)
movieGenreRouter.get('/:id', readMovieGenre)

// Mengupdate data movieGenre (Update)
movieGenreRouter.patch('/:id', updateMovieGenre)

// Menghapus data movieGenre (Delete)
movieGenreRouter.delete('/:id', deleteMovieGenre)

module.exports = movieGenreRouter
