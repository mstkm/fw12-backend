const {createReservedSeatModel, readAllReservedSeatModel, readReservedSeatModel, updateReservedSeatModel, deleteReservedSeatModel} = require('../models/reservedSeat.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Membuat data reservedSeat (Create)
exports.createReservedSeat = (req, res) => {
  createReservedSeatModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Reserved seat created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data reservedSeat (Read)
exports.readAllReservedSeat = (req, res) => {
  readAllReservedSeatModel((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List data of reserved seat',
      results: data.rows
    })
  })
}
// Membaca data reservedSeat berdasarkan id (Read)
exports.readReservedSeat = (req, res) => {
  readReservedSeatModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail reserved seat',
      results: data.rows
    })
  })
}

// Mengupdate data reservedSeat (Update)
exports.updateReservedSeat = (req, res) => {
  updateReservedSeatModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Reserved seat update successfully',
      results: data.rows
    })
  })
}

// Menghapus data reservedSeat (Delete)
exports.deleteReservedSeat = (req, res) => {
  deleteReservedSeatModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete reserved seat successfully',
      results: data.rows
    })
  })
}
