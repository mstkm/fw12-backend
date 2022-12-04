const {createCastModel, readAllCastsModel, countCastsModel, readCastModel, updateCastModel, deleteCastModel} = require('../models/casts.model')
const errorHandler = require('../helpers/errorHandler.helper');
const filter = require('../helpers/filter.helper');

// Controller kirim ke route
// Membuat data cast (Create)
exports.createCast = (req, res) => {
  if (req.body.name === '') {
    return res.status(400).json({
      success: false,
      message: 'Cast name cannot be empty'
    })
  } else {
    createCastModel(req.body, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: 'Cast created successfully',
        results: data.rows[0]
      })
    })
  }
}

// Membaca semua data casts (Read)
exports.readAllCasts = (req, res) => {
  const sortable = ['name', 'createdAt', 'updatedAt'];
  const sortableBy = ['DESC', 'ASC']
  filter(req.query, sortable, sortableBy, countCastsModel, res, (filter, pageInfo) => {
    readAllCastsModel(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: 'List data of casts on /casts',
        pageInfo,
        results: data.rows
      })
    })
  })
}

// Membaca data cast berdasarakan id (Read)
exports.readCast = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Cast id is is not filled yet'
    })
  }
  readCastModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    console.log(data.rows.length)
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail cast',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Cast id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Mengupdate data cast (Update)
exports.updateCast = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Cast id is is not filled yet'
    })
  }
  updateCastModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        succes: true,
        message: 'Cast update successfully',
        results: data.rows
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Cast id ${req.params.id} doesn't exists`
      })
    }
  })
}

// Menghapus data cast (Delete)
exports.deleteCast = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Cast id is is not filled yet'
    })
  }
  deleteCastModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        succes: true,
        message: 'Delete cast successfully',
        results: data.rows
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Cast id ${req.params.id} doesn't exists`
      })
    }
  })
}
