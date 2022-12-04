const errorHandler = require('./errorHandler.helper')

const filter = (data, sortable, sortableBy, countModel, res, cb) => {
  data.page = parseInt(data.page) || 1;
  data.limit = parseInt(data.limit) || 5;
  data.search = data.search || '';
  data.sort = (sortableBy.includes(data.sort) && data.sort) || 'ASC';
  data.sortBy = (sortable.includes(data.sortBy) && data.sortBy) || 'createdAt';

  const params = {
    limit: data.limit,
    offset: (parseInt(data.page) - 1) * data.limit,
    search: data.search,
    sort: data.sort,
    sortBy: data.sortBy
  }

  const pageInfo = {
    page: data.page
  }

  countModel(params, (err, results) => {
    if (err) {
      return errorHandler(err, res);
    }
    pageInfo.totalData = parseInt(results.rows[0].totalData)
    pageInfo.totalPage = Math.ceil(pageInfo.totalData / data.limit)
    pageInfo.page = data.page
    pageInfo.nextPage = data.page < pageInfo.totalPage ? data.page + 1 : null
    pageInfo.prevPage = data.page > 1 ? data.page - 1 : null
    cb(params, pageInfo)
  })
}

module.exports = filter
