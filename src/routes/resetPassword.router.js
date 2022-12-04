const resetPasswordRouter = require('express').Router()
const {createResetPassword, readAllResetPassword, readResetPassword, updateResetPassword, deleteResetPassword} = require('../controllers/resetPassword.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data resetPassword (Create)
resetPasswordRouter.post('/', authMiddleware, createResetPassword)

// Membaca data resetPassword (Read)
resetPasswordRouter.get('/', authMiddleware, readAllResetPassword)
// Membaca data resetPassword berdasarkan id (Read)
resetPasswordRouter.get('/:id', authMiddleware, readResetPassword)

// Mengupdate data resetPassword (Update)
resetPasswordRouter.patch('/:id', authMiddleware, updateResetPassword)

// Menghapus data resetPasword (delete)
resetPasswordRouter.delete('/:id', authMiddleware, deleteResetPassword)

module.exports = resetPasswordRouter
