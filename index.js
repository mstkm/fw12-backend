// Import modules
const express = require('express')
const cors = require('cors')

const app = express()

// untuk membaca body dari request method
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// memperbolehkan untuk diakses pada frontend
app.use(cors())

// static route
app.use('/assets/uploads', express.static('uploads/'))

// terhubung ke index routes
app.use('/', require('./src/routes'))

app.get ('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Backend is running well'
  })
})

// menjalankan aplikasi
app.listen(8888, () => {
  console.log('App listening on port 8888')
})
