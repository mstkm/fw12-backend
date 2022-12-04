const {createStatusModel, readAllStatusModel, readStatusModel, updateStatusModel, deleteStatusModel} = require('../models/status.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Membuat data status (Create)
exports.createStatus = (req, res) => {
  if (req.body.nama === '') {
    return res.status(400).json({
      success: false,
      message: 'Nama cannot be empty'
    })
  }
  createStatusModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Status created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data status (Read)
exports.readAllStatus = (req, res) => {
  readAllStatusModel((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List of status',
      results: data.rows
    })
  })
}

// Membaca data status berdasarkan id (Read)
exports.readStatus = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Status id is not filled yet'
    })
  }
  readStatusModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail status',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Status id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Mengupadte data status (Update)
exports.updateStatus = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Status id is not filled yet'
    })
  }
  updateStatusModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Status update successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Status id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Menghapus data status (Delete)
exports.deleteStatus = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Status id is not filled yet'
    })
  }
  deleteStatusModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Delete status successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Status id ${req.params.id} doesn't exist`
      })
    }
  })
}
