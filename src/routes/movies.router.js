const moviesRouter = require('express').Router()
const {createMovie, readAllMovies, readMovie, updateMovie, deleteMovie, upcoming, nowShowing} = require('../controllers/movies.controller')

// Membuat data movie (Create)
moviesRouter.post('/', createMovie)

moviesRouter.get('/nowShowing', nowShowing)
moviesRouter.get('/upcoming', upcoming)

// Membaca data movies (Read)
moviesRouter.get('/', readAllMovies)
// Membaca data movie berdasarakan id (Read)
moviesRouter.get('/:id', readMovie)

// Mengupdate data movie (Update)
moviesRouter.patch('/:id', updateMovie)

// Menghapus data movie (Delete)
moviesRouter.delete('/:id', deleteMovie)



module.exports = moviesRouter
