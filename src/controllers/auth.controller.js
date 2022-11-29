const {readUserByEmail, createUserModel} = require('../models/users.model')
const jwt = require('jsonwebtoken')
const errorHandler = require('../helpers/errorHandler.helper')

exports.login = (req, res) => {
  readUserByEmail(req.body.email, (err, {rows}) => {
    if(rows.length) {
      const [user] = rows;
      if (req.body.password === user.password) {
        const token = jwt.sign({id: user.id}, 'backend-secret')
        return res.status(200).json({
          success: true,
          message: 'Login success',
          results: {
            token
          }
        })
      }
    }
    return res.status(401).json({
      success: false,
      message: 'Wrong email or password'
    })
  })
}

exports.register = (req, res) => {
  createUserModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    console.log(data);
    const {rows: users} = data;
    const [user] = users;
    const token = jwt.sign({id: user.id}, 'backend-secret')

    return res.status(200).json({
      success: true,
      message: 'Register success',
      results: {
        token
      }
    })
  })
}
