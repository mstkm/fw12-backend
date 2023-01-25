const { readUserByEmail, createUserModel, updateUserModel } = require('../models/users.model')
const { createResetPasswordModel, readResetPasswordByEmailAndCodeModel, deleteResetPasswordModel } = require('../models/resetPassword.model')
const jwt = require('jsonwebtoken')
const argon = require('argon2')
const errorHandler = require('../helpers/errorHandler.helper')
const { transport, mailOptions } = require('../helpers/mail.helper')

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
  readUserByEmail(req.body.email, async (_err, { rows }) => {
    if (rows.length) {
      const [user] = rows
      if (await argon.verify(user.password, req.body.password)) {
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

exports.register = async (req, res) => {
  try {
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
    req.body.password = await argon.hash(req.body.password)
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
  } catch (error) {
    console.log(error)
  }
}

exports.forgotPassword = (req, res) => {
  const { email } = req.body
  readUserByEmail(email, async (err, { rows: users }) => {
    if (err) {
      return errorHandler(err, res)
    }
    try {
      if (users.length) {
        const [user] = users
        const code = String(Math.round(Math.random() * 90000)).padEnd(6, '0')
        await transport.sendMail(mailOptions(email, code))
        const data = {
          email,
          userId: user.id,
          code
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
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        message: 'Failed to request.'
      })
    }
  })
}

exports.resetPassword = (req, res) => {
  let { password, confirmPassword } = req.body
  if (password === confirmPassword) {
    readResetPasswordByEmailAndCodeModel(req.body, async (err, data) => {
      const { rows } = data
      const [resetRequest] = rows
      if (err) {
        errorHandler(err, res)
      }
      if (rows.length) {
        if (new Date(resetRequest.createdAt).getTime() + 60 * 10000 < new Date().getTime()) {
          deleteResetPasswordModel(resetRequest.id, (_err, data) => {
            return res.status(400).json({
              success: false,
              message: 'Code is expired'
            })
          })
        } else {
          password = await argon.hash(req.body.password)
          console.log(password)
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
          message: 'Reset request not found. Check your email or send request again.'
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
