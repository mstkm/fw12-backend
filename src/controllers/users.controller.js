const {createUserModel, readAllUserModel, readUserModel, updateUserModel, deleteUserModel} = require('../models/users.model')

// Controller kirim ke route
// Membuat data user (Create)
exports.createUser = (req, res) => {
  createUserModel(req.body, results => {
    return res.status(200).json({
      success: true,
      message: 'User created successfully',
      results
    })
  })
}

// Membaca data user (Read)
exports.readAllUsers = (req, res) => {
  readAllUserModel(results => {
    return res.status(200).json({
      success: true,
      message: 'List data of users on /users',
      results
    })
  })
}
// Membaca data user berdasarkan id (Read)
exports.readUser = (req, res) => {
  readUserModel(req.params.id, results => {
    return res.status(200).json({
      success: true,
      message: 'Detail user',
      results
    })
  })
}

// Mengupdate data user (Update)
exports.updateUser = (req, res) => {
  updateUserModel(req.params.id, req.body, results => {
    return res.status(200).json({
      success: true,
      message: 'User update successfully',
      results
    })
  })
}

// Menghapus data user (Delete)
exports.deleteUser = (req, res) => {
  deleteUserModel(req.params.id, results => {
    return res.status(200).json({
      success: true,
      message: 'Delete user successfully',
      results
    })
  })
}
