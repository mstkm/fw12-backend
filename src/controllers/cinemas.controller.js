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
    if (req.body.name === '') {
      return res.status(400).json({
        success: false,
        message: 'Name cannot be empty'
      })
    } else if (req.body.address === '') {
      return res.status(400).json({
        success: false,
        message: 'Address cannot be empty'
      })
    } else if (req.body.city === '') {
      return res.status(400).json({
        success: false,
        message: 'City cannot be empty'
      })
    } else {
      return res.status(200).json({
        success: true,
        message: 'Cinema created successfully',
        results: data.rows
      })
    }
  })
}

// Membaca semua data cinemas (Read)
exports.readAllCinemas = (req, res) => {
  const sortable = ['name', 'createdAt', 'updatedAt'];
  const sortableBy = ['DESC', 'ASC'];
  filter(req.query, sortable, sortableBy, countCinemasModel, res, (filter, pageInfo) => {
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
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Cinema id is not filled yet`
    })
  }
  readCinemaModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail cinema',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Cinema with id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Mengupdate data cinema (Update)
exports.updateCinema = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Cinema id is not filled yet`
    })
  }
  updateCinemaModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Cinema update successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Cinema with id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Menghapus data cinema (Delete)
exports.deleteCinema = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: `Cinema id is not filled yet`
    })
  }
  deleteCinemaModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Delete cinema successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Cinema with id ${req.params.id} doesn't exist`
      })
    }
  })
}
