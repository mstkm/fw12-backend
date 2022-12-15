const {createMovieScheduleModel, readAllMovieScheduleModel, readMovieScheduleModel, updateMovieScheduleModel, deleteMovieScheduleModel, readListMovieScheduleModel} = require('../models/movieSchedule.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Controller kirim ke route
// Membuat data movieSchedule (Create)
exports.createMovieSchedule = (req, res) => {
  if (req.body.movieId === '') {
    return res.status(400).json({
      success: false,
      message: 'Movie id cannot be empty'
    })
  }
  if (req.body.cinemaId === '') {
    return res.status(400).json({
      success: false,
      message: 'Cinema id cannot be empty'
    })
  }
  if (req.body.price === '') {
    return res.status(400).json({
      success: false,
      message: 'Price cannot be empty'
    })
  }
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
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Movie genre id is not filled yet`
    })
  }
  readMovieScheduleModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail movieSchedule',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Movie genre id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Mengupdate data movieSchedule (Update)
exports.updateMovieSchedule = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Movie genre id is not filled yet`
    })
  }
  updateMovieScheduleModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'MovieSchedule update successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Movie genre id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Menghapus data movieSchedule (Delete)
exports.deleteMovieSchedule = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Movie genre id is not filled yet`
    })
  }
  deleteMovieScheduleModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Delete movieSchedule successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Movie genre id ${req.params.id} doesn't exist`
      })
    }
  })
}


exports.readListMovieSchedule = (req, res) => {
  console.log(req.params.id)
  console.log(req.params.city)
  console.log(req.params.date)
  readListMovieScheduleModel(req.params.id, req.params.city, req.params.date, (err, data) => {
    if (err) {
      console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List movie schedule',
      results: data.rows
    })
  })
}
