const { readUserModel, updateUserModel } = require('../models/users.model')
const { createTransactionModel, readTransactionByIdModel } = require('../models/transactions.model')
const { createReservedSeatModel } = require('../models/reservedSeat.model')
const errorHandler = require('../helpers/errorHandler.helper')
const fs = require('fs')

// Read
exports.readProfile = (req, res) => {
  req.params.id = req.userData.id
  readUserModel(req.params.id, (err, data) => {
    if (err) {
      errorHandler(err, res)
    }
    return res.status(200).json({
      success: true,
      message: 'Detail profile',
      results: data.rows[0]
    })
  })
}

// Update
exports.updateProfile = (req, res) => {
  req.params.id = req.userData.id
  if (req.file) {
    req.body.picture = req.file.path
    readUserModel(req.params.id, (_err, data) => {
      if (data.rows.length) {
        const [user] = data.rows
        if (user.picture) {
          fs.rm('uploads/' + user.picture, { force: true }, (err) => {
            if (err) {
              return errorHandler(err, res)
            }
          })
        }
      }
    })
  }
  updateUserModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res)
    }
    return res.status(200).json({
      success: true,
      message: 'Update profile successfully',
      results: data.rows[0]
    })
  })
}

// Create transaction
exports.createTransaction = (req, res) => {
  const params = {
    bookingDate: req.body.bookingDate,
    movieId: req.body.movieId,
    userId: req.userData.id,
    cinemaId: req.body.cinemaId,
    movieScheduleId: req.body.movieScheduleId,
    fullName: req.body.fullName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    paymentMethodId: req.body.paymentMethodId,
    statusId: req.body.statusId,
    seatNum: req.body.seatNum,
    cinemaPicture: req.body.cinemaPicture,
    movieTitle: req.body.movieTitle,
    cinemaName: req.body.cinemaName,
    bookingTime: req.body.bookingTime,
    totalPrice: req.body.totalPrice
  }
  if (new Date(req.body.bookingDate) > new Date()) {
    createTransactionModel(params, (err, dataTransaction) => {
      if (err) {
        console.log(err)
        return errorHandler(err, res)
      }
      const seatNum = req.body.seatNum
      const transactionId = dataTransaction.rows[0].id
      createReservedSeatModel({ seatNum, transactionId }, (err, dataReservedSeat) => {
        if (err) {
          return errorHandler(err, res)
        }
        return res.status(200).json({
          success: true,
          message: 'Create transaction successfully',
          results: { transaction: dataTransaction.rows[0], reservedSeat: dataReservedSeat.rows }
        })
      })
    })
  } else {
    return res.status(400).json({
      success: false,
      message: 'Create transaction failed. Booking date not valid'
    })
  }
}

// Membaca data transactions berdsarakan id (Read)
exports.readTransactionById = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Transaction id is not filled yet'
    })
  }
  readTransactionByIdModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res)
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail transaction',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Transaction id ${req.params.id} doesn't exist`
      })
    }
  })
}
