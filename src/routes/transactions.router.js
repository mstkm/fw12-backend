const transactionsRouter = require('express').Router()
const {createTransaction, readAllTransaction, readTransaction, updateTransaction, deleteTransaction} = require('../controllers/transactions.controller')

// Membuat data transaction (Create)
transactionsRouter.post('/', createTransaction)

// Membaca data transactions (Read)
transactionsRouter.get('/', readAllTransaction)
// Membaca data transactions berdsarakan id (Read)
transactionsRouter.get('/:id', readTransaction)

// Mengupdate data transaction (Update)
transactionsRouter.patch('/:id', updateTransaction)

// Menghapus data transaction (Delete)
transactionsRouter.delete('/:id', deleteTransaction)

module.exports = transactionsRouter
