const errorHandler = (err, res) => {
  if(err.message.includes('unique constraint "email"')) {
    return res.status(400).json({
      success: false,
      message: 'Email already exists!'
    })
  }
  return res.status(500).json({
    success: false,
    message: 'Something happend in our backend'
  })
}

module.exports = errorHandler
