const multer = require('multer');
const errorHandler = require('../helpers/errorHandler.helper');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split('.');
    const ext = extension[extension.length-1];
    const name = `${new Date().getDate()}_${new Date().getTime()}.${ext}`;
    cb(null, name)
  }
})

const upload =  multer({
  storage
})

const uploadMiddleware = upload.single('picture')

module.exports = (req, res, next) => {
  uploadMiddleware(req, res, (err) => {
    if (err) {
      return errorHandler(err, res)
    }
    next()
  })
}
