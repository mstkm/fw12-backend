const errorHandler = (err, res) => {
  if (err.message.includes('too large')) {
    return res.status(400).json({
      success: false,
      message: 'File too large. File size max 1MB'
    })
  }
  if (err.message.includes('.png, .jpg and .jpeg')) {
    return res.status(400).json({
      success: false,
      message: 'Invalid input for picture. Only .png, .jpg and .jpeg format allowed!'
    })
  }
  if (err.message.includes('invalid input syntax for type timestamp with time zone')) {
    return res.status(400).json({
      success: false,
      message: 'Invalid input for date. Formats date (YYYY-MM-DD)'
    })
  }
  if (err.message.includes('invalid input syntax for type time')) {
    return res.status(400).json({
      success: false,
      message: 'Invalid input for time. Format time (HH:MM:SS)'
    })
  }
  if (err.message.includes('unique constraint "email"')) {
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
      message: 'Invalid input for date. Format date (YYYY-MM-DD)'
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
