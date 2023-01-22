const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const errorHandler = require('../helpers/errorHandler.helper')

// Configuration
cloudinary.config({
  cloud_name: 'dvzrmzldr',
  api_key: '482277453968621',
  api_secret: 'lGk-vJmdwpUfXjNPs0BByUfNuRc'
})

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/')
//   },
//   filename: (req, file, cb) => {
//     const extension = file.originalname.split('.')
//     const ext = extension[extension.length - 1]
//     const name = `${new Date().getDate()}_${new Date().getTime()}.${ext}`
//     cb(null, name)
//   }
// })

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'karcis',
    format: async (req, file) => file.originalname.split('.')[file.originalname.split('.').length - 1], // supports promises as well
    public_id: (req, file) => {
      const name = `${new Date().getDate()}_${new Date().getTime()}`
      return name
    }
  }
})

const fileFilter = (req, file, cb) => {
  console.log(file)
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
  }
}

const limits = {
  fileSize: 5024 * 1024
}

const upload = multer({
  storage,
  fileFilter,
  limits
})

const uploadMiddleware = upload.single('picture')

module.exports = (req, res, next) => {
  uploadMiddleware(req, res, (err) => {
    if (err) {
      console.log(err)
      return errorHandler(err, res)
    }
    next()
  })
}
