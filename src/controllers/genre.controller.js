const {createGenreModel, readAllGenresModel, readGenreModel, updateGenreModel, deleteGenreModel} = require('../models/genre.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Controller kirim ke route
// Membuat data genre (Create)
exports.createGenre = (req, res) => {
  createGenreModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Genre created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data semua genres (Read)
exports.readAllGenres = (req, res) => {
  readAllGenresModel((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List of genre',
      results: data.rows
    })
  })
}
// Membaca data genre berdasarkan id (Read)
exports.readGenre = (req, res) => {
  readGenreModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail genre',
      results: data.rows
    })
  })
}

// Mengupdate data genre (Update)
exports.updateGenre = (req, res) => {
  updateGenreModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Genre update successfully',
      results: data.rows
    })
  })
}

// Menghapus data genre (Delete)
exports.deleteGenre = (req, res) => {
  deleteGenreModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete Genre successfully',
      results: data.rows
    })
  })
}
