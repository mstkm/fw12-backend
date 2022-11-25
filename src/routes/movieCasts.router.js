const movieCastsRouter = require('express').Router()
const {createMovieCast, readAllMovieCasts, readMovieCast, updateMovieCast, deleteMovieCast} = require('../controllers/movieCasts.controller')

// Membuat data movieCast (Create)
movieCastsRouter.post('/', createMovieCast)

// Membaca data semua movieCasts (Read)
movieCastsRouter.get('/', readAllMovieCasts)
// Membaca data movieCast berdasarkan id (Read)
movieCastsRouter.get('/:id', readMovieCast)

// Mengupdate data movieCast (Update)
movieCastsRouter.patch('/:id', updateMovieCast)

// Menghapus data movieCast (Delete)
movieCastsRouter.delete('/:id', deleteMovieCast)


module.exports = movieCastsRouter
