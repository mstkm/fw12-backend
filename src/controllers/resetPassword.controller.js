const {createResetPasswordModel, readAllResetPasswordModel, readResetPasswordModel, updateResetPasswordModel, deleteResetPasswordModel} = require('../models/resetPassword.model')
const errorHandler = require('../helpers/errorHandler.helper')

// Membuat data resetPassword (Create)
exports.createResetPassword = (req, res) => {
  if (req.body.email === '') {
    return res.status(400).json({
      success: false,
      message: 'Email cannot be empty'
    })
  }
  if (req.body.userId === '') {
    return res.status(400).json({
      success: false,
      message: 'User id cannot be empty'
    })
  }
  if (req.body.code === '') {
    return res.status(400).json({
      success: false,
      message: 'Code cannot be empty'
    })
  }
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
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Reset password id is not filled yet'
    })
  }
  readResetPasswordModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail reset password',
        results: data.rows
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Reset password id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Mengupdate data resetPassword (Update)
exports.updateResetPassword = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Reset password id is not filled yet'
    })
  }
  updateResetPasswordModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Reset password update successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Reset password id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Menghapus data resetPasword (delete)
exports.deleteResetPassword = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Reset password id is not filled yet'
    })
  }
  deleteResetPasswordModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Delete reset password successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Reset password id ${req.params.id} doesn't exist`
      })
    }
  })
}
