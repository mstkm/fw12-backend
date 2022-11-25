const {createMovieGenreModel, readAllMovieGenresModel, readMovieGenreModel, updateMovieGenreModel, deleteMovieGenreModel} = require('../models/movieGenre.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Controller kirim ke route
// Membuat data movieGenre (Create)
exports.createMovieGenre = (req, res) => {
  createMovieGenreModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'MovieGenre created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data semua movieGenre (Read)
exports.readAllMovieGenre = (req, res) => {
  readAllMovieGenresModel((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List data of movieGenre',
      results: data.rows
    })
  })
}
// Membaca data movieGenre berdasarkan id (Read)
exports.readMovieGenre = (req, res) => {
  readMovieGenreModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail movieGenre',
      results: data.rows
    })
  })
}

// Mengupdate data movieGenre (Update)
exports.updateMovieGenre = (req, res) => {
  updateMovieGenreModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'MovieGenre update successfully',
      results: data.rows
    })
  })
}

// Menghapus data movieGenre (Delete)
exports.deleteMovieGenre = (req, res) => {
  deleteMovieGenreModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete movieGenre successfully',
      results: data.rows
    })
  })
}
