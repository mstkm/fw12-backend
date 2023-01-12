const {createTransactionModel, readAllTransactionModel, countTransactionsModel, readTransactionModel, updateTransactionModel, deleteTransactionModel} = require('../models/transactions.model')
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
  const sortableBy = ['ASC', 'DESC'];
  filter(req.query, sortable, sortableBy, countTransactionsModel, res, (filter, pageInfo) => {
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
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Transaction id is not filled yet'
    })
  }
  readTransactionModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail transaction',
        results: data.rows
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Transaction id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Mengupdate data transaction (Update)
exports.updateTransaction = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Transaction id is not filled yet'
    })
  }
  updateTransactionModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Transaction update successfully',
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

// Menghapus data transaction (Delete)
exports.deleteTransaction = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Transaction id is not filled yet'
    })
  }
  deleteTransactionModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Delete transaction successfully',
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


