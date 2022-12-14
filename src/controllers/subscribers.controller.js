const {createSubscriberModel, readAllSubscriberModel, countSubscribersModel, readSubscriberModel, updateSubscriberModel, deleteSubscriberModel} = require('../models/subscribers.model')
const errorHandler = require('../helpers/errorHandler.helper');
const filter = require('../helpers/filter.helper');

// Membuat data subscriber (Create)
exports.createSubscriber = (req, res) => {
  if (req.body.email === '') {
    return res.status(400).json({
      success: false,
      message: 'Email cannot be empty'
    })
  }
  createSubscriberModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Create subscriber successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data subscribers (Read)
exports.readAllSubscriber = (req, res) => {
  const sortable = ['email', 'createdAt', 'updatedAt'];
  const sortableBy = ['ASC', 'DESC']
  filter(req.query, sortable, sortableBy, countSubscribersModel, res, (filter, pageInfo) => {
    readAllSubscriberModel(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: 'List of subscriber',
        pageInfo,
        results: data.rows
      })
    })
  })
}

// Membaca data subscribers berdasarkan id (Read)
exports.readSubscriber = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Subscriber id is not filled yet'
    })
  }
  readSubscriberModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Detail subscriber',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Subscriber id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Mengupdate data subscriber (Update)
exports.updateSubscriber = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Subscriber id is not filled yet'
    })
  }
  updateSubscriberModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Subscriber update successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Subscriber id ${req.params.id} doesn't exist`
      })
    }
  })
}

// Menghapus data subscriber (Delete)
exports.deleteSubscriber = (req, res) => {
  if (req.params.id === ':id') {
    return res.status(400).json({
      success: false,
      message: 'Subscriber id is not filled yet'
    })
  }
  deleteSubscriberModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (data.rows.length) {
      return res.status(200).json({
        success: true,
        message: 'Delete subscriber successfully',
        results: data.rows[0]
      })
    } else {
      return res.status(400).json({
        success: false,
        message: `Subscriber id ${req.params.id} doesn't exist`
      })
    }
  })
}
