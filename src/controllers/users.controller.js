const { createUserModel, readAllUserModel, countUsersModel, readUserModel, updateUserModel, deleteUserModel } = require('../models/users.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')
const fs = require('fs')

// Controller kirim ke route
// Membuat data user (Create)
exports.createUser = (req, res) => {
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
    return res.status(200).json({
      success: true,
      message: 'User created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data user (Read)
exports.readAllUsers = (req, res) => {
  const sortable = ['id', 'firstName', 'lastName', 'phoneNumber', 'email', 'createdAt', 'updatedAt']
  const sortableBy = ['ASC', 'DESC']
  filter(req.query, sortable, sortableBy, countUsersModel, res, (filter, pageInfo) => {
    readAllUserModel(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res)
      }
      return res.status(200).json({
        success: true,
        message: 'List data of users on /users',
        pageInfo,
        results: data.rows
      })
    })
  })
}

// Membaca data user berdasarkan id (Read)
exports.readUser = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'User id is not filled yet'
    })
  }
  readUserModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res)
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail user',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `User id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Mengupdate data user (Update)
exports.updateUser = (req, res) => {
  if (req.file) {
    req.body.picture = req.file.filename
    readUserModel(req.params.id, (_err, data) => {
      if (data.rows.length) {
        const [user] = data.rows
        if (user.picture) {
          fs.rm('uploads/' + user.picture, { force: true }, (err) => {
            if (err) {
              return errorHandler(err, res)
            }
          })
        }
      }
    })
  }
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'User id is not filled yet'
    })
  }
  updateUserModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res)
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'User update successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `User id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Menghapus data user (Delete)
exports.deleteUser = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'User id is not filled yet'
    })
  }
  deleteUserModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res)
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Delete user successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `User id ${req.params.id} doesn't exist`
      })
    }
  })
}
