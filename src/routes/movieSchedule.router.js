const movieScheduleRouter = require('express').Router()
const {createMovieSchedule, readAllMovieSchedule, readMovieSchedule, updateMovieSchedule, deleteMovieSchedule} = require('../controllers/movieSchedule.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data movieSchedule (Create)
movieScheduleRouter.post('/', authMiddleware, createMovieSchedule)

// Membaca data movieSchedule (Read)
movieScheduleRouter.get('/', readAllMovieSchedule)
// Membaca data movieSchedule berdasarkan id (Read)
movieScheduleRouter.get('/:id', readMovieSchedule)

// Mengupdate data movieSchedule (Update)
movieScheduleRouter.patch('/:id', authMiddleware, updateMovieSchedule)

// Menghapus data movieSchedule (Delete)
movieScheduleRouter.delete('/:id', authMiddleware, deleteMovieSchedule)

module.exports = movieScheduleRouter
