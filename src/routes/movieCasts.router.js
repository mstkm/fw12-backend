const movieCastsRouter = require('express').Router()
const {createMovieCast, readAllMovieCasts, readMovieCast, updateMovieCast, deleteMovieCast} = require('../controllers/movieCasts.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data movieCast (Create)
movieCastsRouter.post('/', authMiddleware, createMovieCast)

// Membaca data semua movieCasts (Read)
movieCastsRouter.get('/', readAllMovieCasts)
// Membaca data movieCast berdasarkan id (Read)
movieCastsRouter.get('/:id', readMovieCast)

// Mengupdate data movieCast (Update)
movieCastsRouter.patch('/:id', authMiddleware, updateMovieCast)

// Menghapus data movieCast (Delete)
movieCastsRouter.delete('/:id', authMiddleware, deleteMovieCast)


module.exports = movieCastsRouter
