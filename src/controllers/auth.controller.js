const { readUserByEmail, createUserModel, updateUserModel } = require('../models/users.model')
const { createResetPasswordModel, readResetPasswordByEmailAndCodeModel, deleteResetPasswordModel } = require('../models/resetPassword.model')
const jwt = require('jsonwebtoken')
const errorHandler = require('../helpers/errorHandler.helper')

exports.login = (req, res) => {
  if (req.body.email === '') {
    return res.status(400).json({
      success: false,
      message: 'Email cannot be empty'
    })
  }
  if (req.body.password === '') {
    return res.status(400).json({
      success: false,
      message: 'Password cannot be empty'
    })
  }
  readUserByEmail(req.body.email, (_err, { rows }) => {
    if (rows.length) {
      const [user] = rows
      if (req.body.password === user.password) {
        const token = jwt.sign({ id: user.id, role: user.role }, 'backend-secret')
        return res.status(200).json({
          success: true,
          message: 'Login success',
          results: {
            token
          }
        })
      }
    }
    return res.status(401).json({
      success: false,
      message: 'Wrong email or password'
    })
  })
}

exports.register = (req, res) => {
  if (req.body.firstName === '') {
    return res.status(400).json({
      success: false,
      message: 'First name cannot be empty'
    })
  }
  if (req.body.phoneNumber === '') {
    return res.status(400).json({
      success: false,
      message: 'Phone number cannot be empty'
    })
  }
  if (req.body.email === '') {
    return res.status(400).json({
      success: false,
      message: 'Email cannot be empty'
    })
  }
  if (req.body.password === '') {
    return res.status(400).json({
      success: false,
      message: 'Password cannot be empty'
    })
  }
  createUserModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res)
    }
    readUserByEmail(req.body.email, (_err, { rows }) => {
      if (rows.length) {
        const [user] = rows
        if (req.body.password === user.password) {
          const token = jwt.sign({ id: user.id, role: user.role }, 'backend-secret')
          return res.status(200).json({
            success: true,
            message: 'Register success',
            results: {
              token
            }
          })
        }
      }
    })
  })
}

exports.forgotPassword = (req, res) => {
  const { email } = req.body
  readUserByEmail(email, (err, { rows: users }) => {
    if (err) {
      return errorHandler(err, res)
    }
    if (users.length) {
      const [user] = users
      const data = {
        email,
        userId: user.id,
        code: String(Math.round(Math.random() * 90000)).padEnd(6, '0')
      }
      createResetPasswordModel(data, (_err, { rows: results }) => {
        if (results.length) {
          return res.status(200).json({
            success: true,
            message: 'Reset password has been requested'
          })
        }
      })
    } else {
      return res.status(400).json({
        success: false,
        message: 'User not found. Check your email.'
      })
    }
  })
}

exports.resetPassword = (req, res) => {
  const { password, confirmPassword } = req.body
  if (password === confirmPassword) {
    readResetPasswordByEmailAndCodeModel(req.body, (err, data) => {
      const { rows } = data
      const [resetRequest] = rows
      if (err) {
        errorHandler(err, res)
      }
      if (rows.length) {
        if (new Date(resetRequest.createdAt).getTime() + 60 * 1000 < new Date().getTime()) {
          deleteResetPasswordModel(resetRequest.id, (_err, data) => {
            return res.status(400).json({
              success: false,
              message: 'Code is expired'
            })
          })
        } else {
          updateUserModel(resetRequest.userId, { password }, (err, data) => {
            if (err) {
              errorHandler(err, res)
            }
            deleteResetPasswordModel(resetRequest.id, (_err, data) => {
              return res.status(200).json({
                success: true,
                message: 'Password has been updated, please relogin'
              })
            })
          })
        }
      } else {
        return res.status(400).json({
          success: false,
          message: 'Reset request not found. Please check your code or email.'
        })
      }
    })
  } else {
    return res.status(400).json({
      success: false,
      message: 'Password and confirm password not match'
    })
  }
}
