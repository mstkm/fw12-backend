const movieScheduleTimesRouter = require('express').Router()
const {createMovieScheduleTime, readAllMovieScheduleTime, readMovieScheduleTime, updateMovieScheduleTime, deleteMovieScheduleTime} = require('../controllers/movieScheduleTimes.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data movieScheduleTime (Create)
movieScheduleTimesRouter.post('/', authMiddleware, createMovieScheduleTime)

// Membaca data movieScheduleTime (Read)
movieScheduleTimesRouter.get('/', readAllMovieScheduleTime)
// Membaca data movieScheduleTime berdasarkan id (Read)
movieScheduleTimesRouter.get('/:id', readMovieScheduleTime)

// Mengupdate data movieScheduleTimes (Update)
movieScheduleTimesRouter.patch('/:id', authMiddleware, updateMovieScheduleTime)

// Menghapus data movieScheduleTimes (Delete)
movieScheduleTimesRouter.delete('/:id', authMiddleware, deleteMovieScheduleTime)

module.exports = movieScheduleTimesRouter
