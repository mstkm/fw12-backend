const {createMovieGenreModel, readAllMovieGenresModel, readMovieGenreModel, updateMovieGenreModel, deleteMovieGenreModel} = require('../models/movieGenre.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Controller kirim ke route
// Membuat data movieGenre (Create)
exports.createMovieGenre = (req, res) => {
  if (req.body.movieId === '') {
    return res.status(400).json({
      success: false,
      message: 'Movie id cannot be empty'
    })
  }
  if (req.body.genreId === '') {
    return res.status(400).json({
      success: false,
      message: 'Genre id cannot be empty'
    })
  }
  createMovieGenreModel(req.body, (err, data) => {
    if (err) {
      console.log(err)
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
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Movie genre id is not filled yet`
    })
  }
  readMovieGenreModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail movieGenre',
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

// Mengupdate data movieGenre (Update)
exports.updateMovieGenre = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Movie genre id is not filled yet`
    })
  }
  updateMovieGenreModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'MovieGenre update successfully',
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

// Menghapus data movieGenre (Delete)
exports.deleteMovieGenre = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Movie genre id is not filled yet`
    })
  }
  deleteMovieGenreModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Delete movieGenre successfully',
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
