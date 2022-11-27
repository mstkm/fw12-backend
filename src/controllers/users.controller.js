const {createUserModel, readAllUserModel, countUsersModel, readUserModel, updateUserModel, deleteUserModel} = require('../models/users.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

// Controller kirim ke route
// Membuat data user (Create)
exports.createUser = (req, res) => {
  createUserModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
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
  const sortable = ['firstName', 'lastName', 'phoneNumber', 'email', 'createdAt', 'updatedAt']
  filter(req.query, sortable, countUsersModel, res, (filter, pageInfo) => {
    readAllUserModel(filter, (err, data) => {
      if(err) {
        return errorHandler(err, res);
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
  readUserModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail user',
      results: data.rows
    })
  })
}

// Mengupdate data user (Update)
exports.updateUser = (req, res) => {
  updateUserModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'User update successfully',
      results: data.rows
    })
  })
}

// Menghapus data user (Delete)
exports.deleteUser = (req, res) => {
  deleteUserModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete user successfully',
      results: data.rows
    })
  })
}
