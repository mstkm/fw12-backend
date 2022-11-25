const errorHandler = (err, res) => {
  if(err.message.includes('unique constraint "email"')) {
    return res.status(400).json({
      success: false,
      message: 'Email already exists!'
    })
  }
  if (err.table === 'genre') {
    return res.status(400).json({
      success: false,
      message: 'Genre already exists!'
    })
  }
  if (err.message.includes('syntax for type date')) {
    return res.status(400).json({
      success: false,
      message: 'Invalid input for date'
    })
  }
  if (err.message.includes('syntax for type time')) {
    return res.status(400).json({
      success: false,
      message: 'Invalid input for time'
    })
  }
  return res.status(500).json({
    success: false,
    message: 'Something happend in our backend'
  })
}

module.exports = errorHandler
