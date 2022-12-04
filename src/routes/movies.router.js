const moviesRouter = require('express').Router()
const {createMovie, readAllMovies, readMovie, updateMovie, deleteMovie, upcoming, nowShowing} = require('../controllers/movies.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data movie (Create)
moviesRouter.post('/', authMiddleware, createMovie)

moviesRouter.get('/nowShowing', nowShowing)
moviesRouter.get('/upcoming', upcoming)

// Membaca data movies (Read)
moviesRouter.get('/', readAllMovies)
// Membaca data movie berdasarakan id (Read)
moviesRouter.get('/:id', readMovie)

// Mengupdate data movie (Update)
moviesRouter.patch('/:id', authMiddleware, updateMovie)

// Menghapus data movie (Delete)
moviesRouter.delete('/:id', authMiddleware, deleteMovie)



module.exports = moviesRouter
