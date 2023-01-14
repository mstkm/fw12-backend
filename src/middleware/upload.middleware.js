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

const fileFilter = (req, file, cb) => {
  console.log(file)
  if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
}

const limits = {
  fileSize: 5024 * 5024
}

const upload =  multer({
  storage,
  fileFilter,
  limits
})

const uploadMiddleware = upload.single('picture')

module.exports = (req, res, next) => {
  uploadMiddleware(req, res, (err) => {
    if (err) {
      console.log(err)
      return errorHandler(err, res);
    }
    next()
  })
}
