const {createPaymentMethodModel, readAllPaymentMethodModel, countPaymentMethodModel, readPaymentMethodModel, updatePaymentMethodModel, deletePaymentMethodModel} = require('../models/paymentMethod.model')
const errorHandler = require('../helpers/errorHandler.helper');
const filter = require('../helpers/filter.helper');


// Membuat data paymentMethod (Create)
exports.createPaymentMethod = (req, res) => {
  if (req.body.name === '') {
    return res.status(400).json({
      success: false,
      message: 'Name cannot be empty'
    })
  }
  createPaymentMethodModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Payment method created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data paymentMethod (Read)
exports.readAllPaymentMethod = (req, res) => {
  const sortable = ['name', 'createdAt', 'updatedAt'];
  const sortableBy = ['ASC', 'DESC'];
  filter(req.query, sortable, sortableBy, countPaymentMethodModel, res, (filter, pageInfo) => {
    readAllPaymentMethodModel(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: 'List data of Payment Method',
        pageInfo,
        results: data.rows
      })
    })
  })
}

// Membaca data paymentMethod berdasarkan id (Read)
exports.readPaymentMethod = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Payment method id is not filled yet'
    })
  }
  readPaymentMethodModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Payment method detail',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Payment method id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Mengupdate data paymentMethod (Update)
exports.updatePaymentMethod = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Payment method id is not filled yet'
    })
  }
  updatePaymentMethodModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Payment method update successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Payment method id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Menghapus data paymentMethod (Delete)
exports.deletePaymentMethod = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Payment method id is not filled yet'
    })
  }
  deletePaymentMethodModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Delete payment method successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Payment method id ${req.params.id} doesn't exist`
      })
    }
  })
}
