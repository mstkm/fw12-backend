const {createReservedSeatModel, readAllReservedSeatModel, readReservedSeatModel, updateReservedSeatModel, deleteReservedSeatModel} = require('../models/reservedSeat.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Membuat data reservedSeat (Create)
exports.createReservedSeat = (req, res) => {
  if (req.body.seatNum === '') {
    return res.status(400).json({
      success: false,
      message: 'Seat number cannot be empty'
    })
  }
  if (req.body.transactionId === '') {
    return res.status(400).json({
      success: false,
      message: 'Transaction id cannot be empty'
    })
  }
  createReservedSeatModel(req.body, (err, data) => {
    if (err) {
      console.log(err)
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
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Reserved seat id is not filled yet'
    })
  }
  readReservedSeatModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail reserved seat',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Reserved seat id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Mengupdate data reservedSeat (Update)
exports.updateReservedSeat = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Reserved seat id is not filled yet'
    })
  }
  updateReservedSeatModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Reserved seat update successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Reserved seat id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Menghapus data reservedSeat (Delete)
exports.deleteReservedSeat = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Reserved seat id is not filled yet'
    })
  }
  deleteReservedSeatModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {

      return res.status(200).json({
        success: true,
        message: 'Delete reserved seat successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Reserved seat id ${req.params.id} doesn't exist`
      })
    }
  })
}
