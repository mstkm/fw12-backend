const statusRouter = require('express').Router()
const {createStatus, readAllStatus, readStatus, updateStatus, deleteStatus} = require('../controllers/status.controller')

// Membuat data status (Create)
statusRouter.post('/', createStatus)

// Membaca data status (Read)
statusRouter.get('/', readAllStatus)
// Membaca data status berdasarkan id (Read)
statusRouter.get('/:id', readStatus)

// Mengupadte data status (Update)
statusRouter.patch('/:id', updateStatus)

// Menghapus data status (Delete)
statusRouter.delete('/:id', deleteStatus)

module.exports = statusRouter
