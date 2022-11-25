const paymentMethodRouter = require('express').Router()
const {createPaymentMethod, readAllPaymentMethod, readPaymentMethod, updatePaymentMethod, deletePaymentMethod} = require('../controllers/paymentMethod.controller')

// Membuat data paymentMethod (Create)
paymentMethodRouter.post('/', createPaymentMethod)

// Membaca data paymentMethod (Read)
paymentMethodRouter.get('/', readAllPaymentMethod)

// Membaca data paymentMethod berdasarkan id (Read)
paymentMethodRouter.get('/:id', readPaymentMethod)

// Mengupdate data paymentMethod (Update)
paymentMethodRouter.patch('/:id', updatePaymentMethod)

// Menghapus data paymentMethod (Delete)
paymentMethodRouter.delete('/:id', deletePaymentMethod)

module.exports = paymentMethodRouter
