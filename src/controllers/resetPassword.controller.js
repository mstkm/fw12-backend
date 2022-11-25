const {createResetPasswordModel, readAllResetPasswordModel, readResetPasswordModel, updateResetPasswordModel, deleteResetPasswordModel} = require('../models/resetPassword.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Membuat data resetPassword (Create)
exports.createResetPassword = (req, res) => {
  createResetPasswordModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Create reset password successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data resetPassword (Read)
exports.readAllResetPassword = (req, res) => {
  readAllResetPasswordModel((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'List data of reset password',
      results: data.rows
    })
  })
}
// Membaca data resetPassword berdasarkan id (Read)
exports.readResetPassword = (req, res) => {
  readResetPasswordModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail reset password',
      results: data.rows
    })
  })
}

// Mengupdate data resetPassword (Update)
exports.updateResetPassword = (req, res) => {
  updateResetPasswordModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Reset password update successfully',
      results: data.rows
    })
  })
}

// Menghapus data resetPasword (delete)
exports.deleteResetPassword = (req, res) => {
  deleteResetPasswordModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete reset password successfully',
      results: data.rows
    })
  })
}
