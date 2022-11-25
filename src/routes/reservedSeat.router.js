const reservedSeatRouter = require('express').Router()
const {createReservedSeat, readAllReservedSeat, readReservedSeat, updateReservedSeat, deleteReservedSeat} = require('../controllers/reservedSeat.controller')

// Membuat data reservedSeat (Create)
reservedSeatRouter.post('/', createReservedSeat)

// Membaca data reservedSeat (Read)
reservedSeatRouter.get('/', readAllReservedSeat)
// Membaca data reservedSeat berdasarkan id (Read)
reservedSeatRouter.get('/:id', readReservedSeat)

// Mengupdate data reservedSeat (Update)
reservedSeatRouter.patch('/:id', updateReservedSeat)

// Menghapus data reservedSeat (Delete)
reservedSeatRouter.delete('/:id', deleteReservedSeat)

module.exports = reservedSeatRouter
