const usersRouter = require('express').Router()
const { readAllUsers, readUser, createUser, updateUser, deleteUser } = require('../controllers/users.controller')

// Membuat data user (Create)
usersRouter.post('/', createUser) // menerima query string dan body

// Membaca data user (Read)
usersRouter.get('/', readAllUsers) // menerima query string
// Membaca data user berdasarkan id (Read)
usersRouter.get('/:id', readUser) // menerima query string

// Mengudate data user (Update)
usersRouter.patch('/:id', updateUser) // menerima query string dan body

// Menghapus data user (Delete)
usersRouter.delete('/:id', deleteUser) // menerima query string

module.exports = usersRouter
