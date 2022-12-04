const {createGenreModel, readAllGenresModel, readGenreModel, countGenresModel, updateGenreModel, deleteGenreModel} = require('../models/genre.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

// Controller kirim ke route
// Membuat data genre (Create)
exports.createGenre = (req, res) => {
  createGenreModel(req.body, (err, data) => {
    console.log(data);
    if (err) {
      return errorHandler(err, res);
    }
    if (req.body.name === '') {
      return res.status(400).json({
        success: false,
        message: 'Genre name cannot be empty'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Genre created successfully',
        results: data.rows[0]
      })
    }
  })
}

// Membaca data semua genres (Read)
exports.readAllGenres = (req, res) => {
  const sortable = ['name', 'id', 'createdAt', 'updatedAt'];
  const sortableBy = ['DESC', 'ASC'];
  filter (req.query, sortable, sortableBy, countGenresModel, res, (filter, pageInfo) => {
    readAllGenresModel(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: 'List of genre',
        pageInfo,
        results: data.rows
      })
    })
  })
}

// Membaca data genre berdasarkan id (Read)
exports.readGenre = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Genre id is not filled yet`
    })
  }
  readGenreModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail genre',
        results: data.rows[0]
      })
    }
    return res.status(400).json({
      success: false,
      message: `Genre with id ${req.params.id} doesn't exist`
    })
  })
}

// Mengupdate data genre (Update)
exports.updateGenre = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Genre id is not filled yet`
    })
  }
  updateGenreModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Genre update successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Genre with id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Menghapus data genre (Delete)
exports.deleteGenre = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Genre id is not filled yet`
    })
  }
  deleteGenreModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Delete Genre successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Genre with id ${req.params.id} doesn't exist`
      })
    }
  })
}
