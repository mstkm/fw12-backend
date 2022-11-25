const {createMovieScheduleTimeModel, readAllMovieScheduleTimesModel, readMovieScheduleTimeModel, updateMovieScheduleTimeModel, deleteMovieScheduleTimeModel} = require('../models/movieScheduleTimes.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Controller kirim ke route
// Membuat data movieScheduleTime (Create)
exports.createMovieScheduleTime = (req, res) => {
  createMovieScheduleTimeModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'MovieScheduleTime created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data movieScheduleTime (Read)
exports.readAllMovieScheduleTime = (req, res) => {
  readAllMovieScheduleTimesModel((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List data of movieScheduleTime',
      results: data.rows
    })
  })
}
// Membaca data movieScheduleTime berdsarkan id (Read)
exports.readMovieScheduleTime = (req, res) => {
  readMovieScheduleTimeModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail movieScheduleTime',
      results: data.rows
    })
  })
}

// Mengupdate data movieScheduleTimes (Update)
exports.updateMovieScheduleTime = (req, res) => {
  updateMovieScheduleTimeModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'MovieScheduleTimes update successfully',
      results: data.rows
    })
  })
}

// Menghapus data movieScheduleTimes (Delete)
exports.deleteMovieScheduleTime = (req, res) => {
  deleteMovieScheduleTimeModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete movieScheduleTimes successfully',
      results: data.rows
    })
  })
}
