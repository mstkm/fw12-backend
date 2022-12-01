const {createMovieModel, readAllMoviesModel, countMoviesModel, readMovieModel, updateMovieModel, deleteMovieModel, upcomingModel, nowShowingModel, countNowShowingModel, countUpcomingModel} = require('../models/movies.model')
const errorHandler = require('../helpers/errorHandler.helper')
const filter = require('../helpers/filter.helper')

// Controller kirim ke route
// Membuata data movie (Create)
exports.createMovie = (req, res) => {
  createMovieModel(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Movie created successfully',
      results: data.rows[0]
    })
  })
}

// Membaca data movies (Read)
exports.readAllMovies = (req, res) => {
  const sortable = ['title', 'director', 'createdAt', 'updatedAt']
  filter(req.query, sortable, countMoviesModel, res, (filter, pageInfo) => {
    readAllMoviesModel(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: 'List data of movies',
        pageInfo,
        results: data.rows
      })
    })
  })
}
// Membaca data movie berdasarakan id (Read)
exports.readMovie = (req, res) => {
  readMovieModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Movie detail',
      results: data.rows
    })
  })
}

// Mengupdate data movie (Update)
exports.updateMovie = (req, res) => {
  updateMovieModel(req.params.id, req.body, (err, data) => {
    if (err) {
      console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Movie update successfully',
      results: data.rows
    })
  })
}

// Menghapus data movie (Delete)
exports.deleteMovie = (req, res) => {
  deleteMovieModel(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: 'Delete movie successfully',
      results: data.rows
    })
  })
}

// Now Showing
exports.nowShowing = (req, res) => {
  const sortable = ['title', 'startDate', 'endDate']

  req.query.limit = parseInt(req.query.limit) || 5;
  req.query.page = parseInt(req.query.page) || 1;
  req.query.search = req.query.search || '';
  req.query.sort = req.query.sort || 'ASC';
  req.query.sortBy = (sortable.includes(req.query.sortBy) && req.query.sortBy) || 'startDate';

  const params = {
    limit: req.query.limit,
    offset: (parseInt(req.query.page) - 1) * req.query.limit,
    search: req.query.search,
    sort: req.query.sort,
    sortBy: req.query.sortBy
  }

  countNowShowingModel(req.query, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    const {totalData} = data.rows[0];
    const pageInfo = {
      totalData: parseInt(totalData),
      totalPage: Math.ceil(totalData/req.query.limit),
      page: req.query.page,
      nextPage: req.query.page < Math.ceil(totalData/req.query.limit) ? req.query.page + 1 : null,
      prevPage: req.query.page > 1 ? req.query.page - 1 : null
    }
    nowShowingModel(params, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: 'List of now showing movies',
        pageInfo,
        results: data.rows
      })
    })
  })
}

// Upcoming
exports.upcoming = (req, res) => {
  const sortable = ['title', 'releaseDate']

  req.query.month = req.query.month || new Date().getMonth()
  req.query.year = req.query.year || new Date().getFullYear()
  req.query.limit = parseInt(req.query.limit) || 5;
  req.query.page = parseInt(req.query.page) || 1;
  req.query.search = req.query.search || '';
  req.query.sort = req.query.sort || 'ASC';
  req.query.sortBy = (sortable.includes(req.query.sortBy) && req.query.sortBy) || 'releaseDate';

  const params = {
    month: req.query.month,
    year: req.query.year,
    limit: req.query.limit,
    offset: (parseInt(req.query.page) - 1) * req.query.limit,
    search: req.query.search,
    sort: req.query.sort,
    sortBy: req.query.sortBy
  }

  countUpcomingModel(req.query, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    const {totalData} = data.rows[0];
    const pageInfo = {
      totalData: parseInt(totalData),
      totalPage: Math.ceil(totalData/req.query.limit),
      page: req.query.page,
      nextPage: req.query.page < Math.ceil(totalData/req.query.limit) ? req.query.page + 1 : null,
      prevPage: req.query.page > 1 ? req.query.page - 1 : null
    }
    upcomingModel(params, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: 'List of upcoming movies',
        pageInfo,
        results: data.rows
      })
    })
  })
}
