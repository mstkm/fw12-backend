const {createSubscriberModel, readAllSubscriberModel, countSubscribersModel, readSubscriberModel, updateSubscriberModel, deleteSubscriberModel} = require('../models/subscribers.model')
const errorHandler = require('../helpers/errorHandler.helper');
const filter = require('../helpers/filter.helper');

// Membuat data subscriber (Create)
exports.createSubscriber = (req, res) => {
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
  filter(req.query, sortable, countSubscribersModel, res, (filter, pageInfo) => {
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
  readSubscriberModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Detail subscriber',
      results: data.rows
    })
  })
}

// Mengupdate data subscriber (Update)
exports.updateSubscriber = (req, res) => {
  updateSubscriberModel(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Subscriber update successfully',
      results: data.rows
    })
  })
}

// Menghapus data subscriber (Delete)
exports.deleteSubscriber = (req, res) => {
  deleteSubscriberModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete subscriber successfully',
      results: data.rows
    })
  })
}
