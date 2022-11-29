const {readUserByEmail, createUserModel, updateUserModel} = require('../models/users.model')
const { createResetPasswordModel, readResetPasswordByEmailAndCodeModel, deleteResetPasswordModel } = require('../models/resetPassword.model')
const jwt = require('jsonwebtoken')
const errorHandler = require('../helpers/errorHandler.helper')

exports.login = (req, res) => {
  readUserByEmail(req.body.email, (err, {rows}) => {
    if(rows.length) {
      const [user] = rows;
      if (req.body.password === user.password) {
        const token = jwt.sign({id: user.id}, 'backend-secret')
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
  createUserModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    const {rows: users} = data;
    const [user] = users;
    const token = jwt.sign({id: user.id}, 'backend-secret')

    return res.status(200).json({
      success: true,
      message: 'Register success',
      results: {
        token
      }
    })
  })
}

exports.forgotPassword = (req, res) => {
  const {email} = req.body;
  readUserByEmail(email, (err, {rows: users}) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (users.length) {
      const [user] = users;
      const data = {
        email,
        userId: user.id,
        code: Math.round(Math.random()*90000)
      }
      createResetPasswordModel(data, (err, {rows: results}) => {
        if (results.length) {
          return res.status(200).json({
            success: true,
            message: "Reset password has been requested"
          })
        }
      })
    } else {
      return res.status(400).json({
        success: false,
        message: 'User not found'
      })
    }
  })
}

exports.resetPassword = (req, res) => {
 const {password, confirmPassword} = req.body;
 if (password === confirmPassword) {
  readResetPasswordByEmailAndCodeModel(req.body, (err, data) => {
    const {rows} = data;
    const [resetRequest] = rows;
    if (err) {
      errorHandler(err, res);
    }
    if (rows.length) {
      if (new Date(resetRequest.createdAt).getTime() + 60*1000 < new Date().getTime()) {
        deleteResetPasswordModel(resetRequest.id, (err, data) => {
          return res.status(400).json({
            success: false,
            message: 'Code is expired',
          })
        })
      } else {
        updateUserModel(resetRequest.userId, {password}, (err, data) => {
          if (err) {
            errorHandler(err, res);
          }
          return res.status(200).json({
            success: true,
            message: 'Password has been updated, please relogin',
            results: data.rows
          })
        })
      }
    } else {
      return res.status(400).json({
        success: false,
        message: 'Reset Request not found'
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
