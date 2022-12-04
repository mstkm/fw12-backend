const reservedSeatRouter = require('express').Router()
const {createReservedSeat, readAllReservedSeat, readReservedSeat, updateReservedSeat, deleteReservedSeat} = require('../controllers/reservedSeat.controller')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data reservedSeat (Create)
reservedSeatRouter.post('/', authMiddleware, createReservedSeat)

// Membaca data reservedSeat (Read)
reservedSeatRouter.get('/', readAllReservedSeat)
// Membaca data reservedSeat berdasarkan id (Read)
reservedSeatRouter.get('/:id', readReservedSeat)

// Mengupdate data reservedSeat (Update)
reservedSeatRouter.patch('/:id', authMiddleware, updateReservedSeat)

// Menghapus data reservedSeat (Delete)
reservedSeatRouter.delete('/:id', authMiddleware, deleteReservedSeat)

module.exports = reservedSeatRouter
