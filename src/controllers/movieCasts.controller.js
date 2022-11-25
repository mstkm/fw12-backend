const {createMovieCastModel, readAllMovieCastsModel, readMovieCastModel, updateMovieCastModel, deleteMovieCastModel} = require('../models/movieCasts.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Controller kirim ke route
// Membuat data movieCast (Create)
exports.createMovieCast = (req, res) => {
  createMovieCastModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'movieCast created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data semua movieCasts (Read)
exports.readAllMovieCasts = (req, res) => {
  readAllMovieCastsModel((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List data of movieCast',
      results: data.rows
    })
  })
}
// Membaca data movieCasts berdasarakan id (Read)
exports.readMovieCast = (req, res) => {
  readMovieCastModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail movieCasts',
      results: data.rows
    })
  })
}

// Mengupdate data movieCast (Update)
exports.updateMovieCast = (req, res) => {
  updateMovieCastModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'MovieCast update successfully',
      results: data.rows
    })
  })
}

// Menghapus data movieCast (Delete)
exports.deleteMovieCast = (req, res) => {
  deleteMovieCastModel(req.params.id, (err, data) => {
    if (err) {
      console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete movieCast successfully',
      results: data.rows
    })
  })
}
