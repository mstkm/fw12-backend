const express = require('express')

const app = express()

app.get ('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Backend is running well'
  })
})

app.listen(8888, () => {
  console.log(`App listening on port 8888`)
})
