const jwt = require('jsonwebtoken')

exports.authMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization && authorization.startsWith('Bearer ')) {
    const token = authorization.slice(7);
    try {
      const payload = jwt.verify(token, 'backend-secret');
      req.userData = payload;
      next()
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: err.message
      })
    }
  } else {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    })
  }
}

