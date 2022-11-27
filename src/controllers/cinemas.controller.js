const {createCinemaModel, readAllCinemasModel, countCinemasModel, readCinemaModel, updateCinemaModel, deleteCinemaModel} = require('../models/cinemas.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

// Controller kirim ke route
// Membuat data cinema (Create)
exports.createCinema = (req, res) => {
  createCinemaModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Cinema created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca semua data cinemas (Read)
exports.readAllCinemas = (req, res) => {
  const sortable = ['name', 'createdAt', 'updatedAt'];
  filter(req.query, sortable, countCinemasModel, res, (filter, pageInfo) => {
    readAllCinemasModel(filter, (err, data) => {
      if (err) {
        console.log(err)
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: 'List data of cinemas',
        pageInfo,
        results: data.rows
      })
    })
  })
}

// Membaca data cinema berdasarkan id (Read)
exports.readCinema = (req, res) => {
  readCinemaModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail cinema',
      results: data.rows
    })
  })
}

// Mengupdate data cinema (Update)
exports.updateCinema = (req, res) => {
  updateCinemaModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Cinema update successfully',
      results: data.rows
    })
  })
}

// Menghapus data cinema (Delete)
exports.deleteCinema = (req, res) => {
  deleteCinemaModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete cinema successfully',
      results: data.rows
    })
  })
}
