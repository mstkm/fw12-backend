const {createMovieModel, readAllMoviesModel, readMovieModel, updateMovieModel, deleteMovieModel} = require('../models/movies.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Controller kirim ke route
// Membuata data movie (Create)
exports.createMovie = (req, res) => {
  createMovieModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Movie created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data movies (Read)
exports.readAllMovies = (req, res) => {
  readAllMoviesModel((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List data of movies',
      results: data.rows
    })
  })
}
// Membaca data movie berdasarakan id (Read)
exports.readMovie = (req, res) => {
  readMovieModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Movie detail',
      results: data.rows
    })
  })
}

// Mengupdate data movie (Update)
exports.updateMovie = (req, res) => {
  updateMovieModel(req.params.id, req.body, (err, data) => {
    if (err) {
      console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Movie update successfully',
      results: data.rows
    })
  })
}

// Menghapus data movie (Delete)
exports.deleteMovie = (req, res) => {
  deleteMovieModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete movie successfully',
      results: data.rows
    })
  })
}
