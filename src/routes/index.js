const routes = require('express').Router()
const {authMiddleware} = require('../middleware/auth.middleware')

// Route profile
routes.use('/profile', authMiddleware, require('./profile.router'))
routes.use('/profile/update', authMiddleware, require('./profile.router'))
routes.use('/profile/transaction', authMiddleware, require('./profile.router'))

// Route user
routes.use('/users', require('./users.router'))
routes.use('/users/:id', require('./users.router'))

// Route casts
routes.use('/casts', require('./casts.router'))
routes.use('/casts/:id', require('./casts.router'))

// Route cinemas
routes.use('/cinemas', require('./cinemas.router'))
routes.use('/cinemas/:id', require('./cinemas.router'))

// Route genre
routes.use('/genre', require('./genre.router'))
routes.use('/genre/:id', require('./genre.router'))

// Route movieCasts
routes.use('/movieCasts', require('./movieCasts.router'))
routes.use('/movieCasts/:id', require('./movieCasts.router'))

// Route movieGenre
routes.use('/movieGenre', require('./movieGenre.router'))
routes.use('/movieGenre/:id', require('./movieGenre.router'))

// Route movieSchedule
routes.use('/movieSchedule', require('./movieSchedule.router'))
routes.use('/movieSchedule/:id', require('./movieSchedule.router'))

// Route movieScheduleTimes
routes.use('/movieScheduleTimes', require('./movieScheduleTimes.router'))
routes.use('/movieScheduleTimes/:id', require('./movieScheduleTimes.router'))

// Route movies
routes.use('/movies', require('./movies.router'))
routes.use('/movies/:id', require('./movies.router'))

// Route paymentMethod
routes.use('/paymentMethod', require('./paymentMethod.router'))
routes.use('/paymentMethod/:id', require('./paymentMethod.router'))

// Route reservedSeat
routes.use('/reservedSeat', require('./reservedSeat.router'))
routes.use('/reservedSeat/:id', require('./reservedSeat.router'))

// Route resetPassword
routes.use('/resetPassword', require('./resetPassword.router'))
routes.use('/resetPassword/:id', require('./resetPassword.router'))

// Route status
routes.use('/status', require('./status.router'))
routes.use('/status/:id', require('./status.router'))

// Route subscribers
routes.use('/subscribers', require('./subscribers.router'))
routes.use('/subscribers/:id', require('./subscribers.router'))

// Route transactions
routes.use('/transactions', require('./transactions.router'))
routes.use('/transactions/:id', require('./transactions.router'))

// Route auth
routes.use('/auth', require('./auth.router'))

// route now dan upcoming movie
routes.use('/movies/nowShowing', require('./movies.router'))
routes.use('/movies/upcoming', require('./movies.router'))


module.exports = routes
