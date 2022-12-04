const {createMovieScheduleTimeModel, readAllMovieScheduleTimesModel, readMovieScheduleTimeModel, updateMovieScheduleTimeModel, deleteMovieScheduleTimeModel} = require('../models/movieScheduleTimes.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Controller kirim ke route
// Membuat data movieScheduleTime (Create)
exports.createMovieScheduleTime = (req, res) => {
  if (req.body.time === '') {
    return res.status(400).json({
      success: false,
      message: 'Time cannot be empty'
    })
  }
  if (req.body.movieScheduleId === '') {
    return res.status(400).json({
      success: false,
      message: 'movieScheduleId cannot be empty'
    })
  }
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
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Cast id is is not filled yet'
    })
  }
  readMovieScheduleTimeModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail movieScheduleTime',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Cast id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Mengupdate data movieScheduleTimes (Update)
exports.updateMovieScheduleTime = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Cast id is is not filled yet'
    })
  }
  updateMovieScheduleTimeModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'MovieScheduleTimes update successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Cast id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Menghapus data movieScheduleTimes (Delete)
exports.deleteMovieScheduleTime = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Cast id is is not filled yet'
    })
  }
  deleteMovieScheduleTimeModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Delete movieScheduleTimes successfully',
        results: data.rows
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Cast id ${req.params.id} doesn't exist`
      })
    }
  })
}
