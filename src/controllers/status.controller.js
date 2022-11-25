const {createStatusModel, readAllStatusModel, readStatusModel, updateStatusModel, deleteStatusModel} = require('../models/status.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Membuat data status (Create)
exports.createStatus = (req, res) => {
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
  readStatusModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail status',
      results: data.rows
    })
  })
}

// Mengupadte data status (Update)
exports.updateStatus = (req, res) => {
  updateStatusModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Status update successfully',
      results: data.rows
    })
  })
}

// Menghapus data status (Delete)
exports.deleteStatus = (req, res) => {
  deleteStatusModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete status successfully',
      results: data.rows
    })
  })
}
