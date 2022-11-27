const {createPaymentMethodModel, readAllPaymentMethodModel, countPaymentMethodModel, readPaymentMethodModel, updatePaymentMethodModel, deletePaymentMethodModel} = require('../models/paymentMethod.model')
const errorHandler = require('../helpers/errorHandler.helper');
const filter = require('../helpers/filter.helper');


// Membuat data paymentMethod (Create)
exports.createPaymentMethod = (req, res) => {
  createPaymentMethodModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Payment method created successfully',
      results: data.rows
    })
  })
}

// Membaca data paymentMethod (Read)
exports.readAllPaymentMethod = (req, res) => {
  const sortable = ['name', 'createdAt', 'updatedAt'];
  filter(req.query, sortable, countPaymentMethodModel, res, (filter, pageInfo) => {
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
  readPaymentMethodModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Payment method detail',
      results: data.rows
    })
  })
}

// Mengupdate data paymentMethod (Update)
exports.updatePaymentMethod = (req, res) => {
  updatePaymentMethodModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Payment method update successfully',
      results: data.rows
    })
  })
}

// Menghapus data paymentMethod (Delete)
exports.deletePaymentMethod = (req, res) => {
  deletePaymentMethodModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete payment method successfully',
      results: data.rows
    })
  })
}
