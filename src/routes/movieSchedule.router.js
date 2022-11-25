const movieScheduleRouter = require('express').Router()
const {createMovieSchedule, readAllMovieSchedule, readMovieSchedule, updateMovieSchedule, deleteMovieSchedule} = require('../controllers/movieSchedule.controller')

// Membuat data movieSchedule (Create)
movieScheduleRouter.post('/', createMovieSchedule)

// Membaca data movieSchedule (Read)
movieScheduleRouter.get('/', readAllMovieSchedule)
// Membaca data movieSchedule berdasarkan id (Read)
movieScheduleRouter.get('/:id', readMovieSchedule)

// Mengupdate data movieSchedule (Update)
movieScheduleRouter.patch('/:id', updateMovieSchedule)

// Menghapus data movieSchedule (Delete)
movieScheduleRouter.delete('/:id', deleteMovieSchedule)

module.exports = movieScheduleRouter
