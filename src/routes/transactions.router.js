const transactionsRouter = require('express').Router()
const {createTransaction, readAllTransaction, readTransaction, updateTransaction, deleteTransaction} = require('../controllers/transactions.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data transaction (Create)
transactionsRouter.post('/', authMiddleware, createTransaction)

// Membaca data transactions (Read)
transactionsRouter.get('/', authMiddleware, readAllTransaction)
// Membaca data transactions berdsarakan id (Read)
transactionsRouter.get('/:id', authMiddleware, readTransaction)

// Mengupdate data transaction (Update)
transactionsRouter.patch('/:id', authMiddleware, updateTransaction)

// Menghapus data transaction (Delete)
transactionsRouter.delete('/:id', authMiddleware, deleteTransaction)

module.exports = transactionsRouter
