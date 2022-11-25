const resetPasswordRouter = require('express').Router()
const {createResetPassword, readAllResetPassword, readResetPassword, updateResetPassword, deleteResetPassword} = require('../controllers/resetPassword.controller')


// Membuat data resetPassword (Create)
resetPasswordRouter.post('/', createResetPassword)

// Membaca data resetPassword (Read)
resetPasswordRouter.get('/', readAllResetPassword)
// Membaca data resetPassword berdasarkan id (Read)
resetPasswordRouter.get('/:id', readResetPassword)

// Mengupdate data resetPassword (Update)
resetPasswordRouter.patch('/:id', updateResetPassword)

// Menghapus data resetPasword (delete)
resetPasswordRouter.delete('/:id', deleteResetPassword)

module.exports = resetPasswordRouter
