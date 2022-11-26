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
  if (err.message.includes('violates foreign key')) {
    if (err.message.includes('fk_movieId') || err.message.includes('movieId')) {
      return res.status(400).json({
        success: false,
        message: 'movieId not found'
      })
    } else if (err.message.includes('fk_genreId')) {
      return res.status(400).json({
        success: false,
        message: 'genreId not found'
      })
    } else if (err.message.includes('fk_castsId')) {
      return res.status(400).json({
        success: false,
        message: 'castsId not found'
      })
    } else if (err.message.includes('fk_cinemaId')) {
      return res.status(400).json({
        success: false,
        message: 'cinemaId not found'
      })
    } else if (err.message.includes('fk_movieScheduleId')) {
      return res.status(400).json({
        success: false,
        message: 'movieScheduleId not found'
      })
    } else if (err.message.includes('fk_transactionId')) {
      return res.status(400).json({
        success: false,
        message: 'transactionId not found'
      })
    } else if (err.message.includes('fk_userId')) {
      return res.status(400).json({
        success: false,
        message: 'userId not found'
      })
    } else if (err.message.includes('fk_statusId')) {
      return res.status(400).json({
        success: false,
        message: 'statusId not found'
      })
    }
  }
  return res.status(500).json({
    success: false,
    message: 'Something happend in our backend'
  })
}

module.exports = errorHandler
