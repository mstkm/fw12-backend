const usersRouter = require('express').Router()
const { readAllUsers, readUser, createUser, updateUser, deleteUser } = require('../controllers/users.controller')
const uploadMiddleware = require('../middleware/upload.middleware')
const {authMiddleware} = require('../middleware/auth.middleware')

// Membuat data user (Create)
usersRouter.post('/', authMiddleware, createUser) // menerima query string dan body

// Membaca data user (Read)
usersRouter.get('/', authMiddleware, readAllUsers) // menerima query string
// Membaca data user berdasarkan id (Read)
usersRouter.get('/:id', authMiddleware, readUser) // menerima query string

// Mengudate data user (Update)
usersRouter.patch('/:id', authMiddleware, uploadMiddleware, updateUser) // menerima query string dan body

// Menghapus data user (Delete)
usersRouter.delete('/:id', authMiddleware, deleteUser) // menerima query string

module.exports = usersRouter
