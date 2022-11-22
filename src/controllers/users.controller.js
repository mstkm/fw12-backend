exports.readAllUsers = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'List data of users on /users'
  })
}

exports.readUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Detail user'
  })
}

exports.createUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'User created successfully'
  })
}

exports.updateUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'User update successfully'
  })
}

exports.deleteUser = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Delete user successfully'
  })
}
