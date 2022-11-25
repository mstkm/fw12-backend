const {createTransactionModel, readAllTransactionModel, readTransactionModel, updateTransactionModel, deleteTransactionModel} = require('../models/transactions.model')
const errorHandler = require('../helpers/errorHandler.helper')

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
  readAllTransactionModel((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List data of transaction',
      results: data.rows
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
