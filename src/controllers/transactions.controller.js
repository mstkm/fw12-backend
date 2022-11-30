const {createTransactionModel, readAllTransactionModel, countTransactionsModel, readTransactionModel, updateTransactionModel, deleteTransactionModel} = require('../models/transactions.model')
const {createReservedSeatModel} = require('../models/reservedSeat.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

// Membuat data transaction (Create)
exports.createTransaction = (req, res) => {
  createTransactionModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Create transaction successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data transactions (Read)
exports.readAllTransaction = (req, res) => {
  const sortable = ['fullName', "email", "phoneNumber", "statusId", "createdAt", "updatedAt"];
  filter(req.query, sortable, countTransactionsModel, res, (filter, pageInfo) => {
    readAllTransactionModel(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: 'List data of transaction',
        pageInfo,
        results: data.rows
      })
    })
  })
}
// Membaca data transactions berdsarakan id (Read)
exports.readTransaction = (req, res) => {
  readTransactionModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail transaction',
      results: data.rows
    })
  })
}

// Mengupdate data transaction (Update)
exports.updateTransaction = (req, res) => {
  updateTransactionModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Transaction update successfully',
      results: data.rows
    })
  })
}

// Menghapus data transaction (Delete)
exports.deleteTransaction = (req, res) => {
  deleteTransactionModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete transaction successfully',
      results: data.rows
    })
  })
}

exports.newCreateTransaction = (req, res) => {
  const userId = req.userData.id;
  if (userId) {
    createTransactionModel(req.body, (err, dataTransaction) => {
      if (err) {
        return errorHandler(err, res);
      }
      const seatNum = req.body.seatNum;
      const transactionId = dataTransaction.rows[0].id;
      console.log(transactionId)
      createReservedSeatModel({seatNum, transactionId}, (err, dataReservedSeat) => {
        if (err) {
          return errorHandler(err, res);
        }
        return res.status(200).json({
          success: true,
          message: 'Create transaction successfully',
          results: {transaction: dataTransaction.rows, reservedSeat: dataReservedSeat.rows}
        })
      })
    })
  }
}
