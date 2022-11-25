const movieScheduleTimesRouter = require('express').Router()
const {createMovieScheduleTime, readAllMovieScheduleTime, readMovieScheduleTime, updateMovieScheduleTime, deleteMovieScheduleTime} = require('../controllers/movieScheduleTimes.controller')

// Membuat data movieScheduleTime (Create)
movieScheduleTimesRouter.post('/', createMovieScheduleTime)

// Membaca data movieScheduleTime (Read)
movieScheduleTimesRouter.get('/', readAllMovieScheduleTime)
// Membaca data movieScheduleTime berdasarkan id (Read)
movieScheduleTimesRouter.get('/:id', readMovieScheduleTime)

// Mengupdate data movieScheduleTimes (Update)
movieScheduleTimesRouter.patch('/:id', updateMovieScheduleTime)

// Menghapus data movieScheduleTimes (Delete)
movieScheduleTimesRouter.delete('/:id', deleteMovieScheduleTime)

module.exports = movieScheduleTimesRouter
