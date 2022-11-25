const {createMovieScheduleModel, readAllMovieScheduleModel, readMovieScheduleModel, updateMovieScheduleModel, deleteMovieScheduleModel} = require('../models/movieSchedule.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Controller kirim ke route
// Membuat data movieSchedule (Create)
exports.createMovieSchedule = (req, res) => {
  createMovieScheduleModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'MovieSchedule created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data movieSchedule (Read)
exports.readAllMovieSchedule = (req, res) => {
  readAllMovieScheduleModel((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List data of movieSchedule',
      results: data.rows
    })
  })
}
// Membaca data movieSchedule berdasarka id (Read)
exports.readMovieSchedule = (req, res) => {
  readMovieScheduleModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail movieSchedule',
      results: data.rows
    })
  })
}

// Mengupdate data movieSchedule (Update)
exports.updateMovieSchedule = (req, res) => {
  updateMovieScheduleModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'MovieSchedule update successfully',
      results: data.rows
    })
  })
}

// Menghapus data movieSchedule (Delete)
exports.deleteMovieSchedule = (req, res) => {
  deleteMovieScheduleModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete movieSchedule successfully',
      results: data.rows
    })
  })
}
