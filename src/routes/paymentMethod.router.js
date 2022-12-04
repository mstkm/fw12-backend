const paymentMethodRouter = require('express').Router()
const {createPaymentMethod, readAllPaymentMethod, readPaymentMethod, updatePaymentMethod, deletePaymentMethod} = require('../controllers/paymentMethod.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data paymentMethod (Create)
paymentMethodRouter.post('/', authMiddleware, createPaymentMethod)

// Membaca data paymentMethod (Read)
paymentMethodRouter.get('/', readAllPaymentMethod)

// Membaca data paymentMethod berdasarkan id (Read)
paymentMethodRouter.get('/:id', readPaymentMethod)

// Mengupdate data paymentMethod (Update)
paymentMethodRouter.patch('/:id', authMiddleware, updatePaymentMethod)

// Menghapus data paymentMethod (Delete)
paymentMethodRouter.delete('/:id', authMiddleware, deletePaymentMethod)

module.exports = paymentMethodRouter
