const {createCastModel, readAllCastsModel, readCastModel, updateCastModel, deleteCastModel} = require('../models/casts.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Controller kirim ke route
// Membuat data cast (Create)
exports.createCast = (req, res) => {
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

// Membaca semua data casts (Read)
exports.readAllCasts = (req, res) => {
  readAllCastsModel((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List data of casts on /casts',
      results: data.rows
    })
  })
}
// Membaca data cast berdasarakan id (Read)
exports.readCast = (req, res) => {
  readCastModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail cast',
      results: data.rows
    })
  })
}

// Mengupdate data cast (Update)
exports.updateCast = (req, res) => {
  updateCastModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      succes: true,
      message: 'Cast update successfully',
      results: data.rows
    })
  })
}

// Menghapus data cast (Delete)
exports.deleteCast = (req, res) => {
  deleteCastModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      succes: true,
      message: 'Delete cast successfully',
      results: data.rows
    })
  })
}
