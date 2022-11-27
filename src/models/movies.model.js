const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data movie (Create)
exports.createMovieModel = (data, cb) => {
  const sql = 'INSERT INTO movies ("title", "picture", "releaseDate", "director", "duration", "synopsis") VALUES ($1,$2, $3, $4, $5, $6) RETURNING *';
  const value = [data.title, data.picture, data.releaseDate, data.director, data.duration, data.synopsis];
  db.query(sql, value, cb);
}

// Membaca data movies (Read)
exports.readAllMoviesModel = (filter, cb) => {
  const sql = `SELECT * FROM movies WHERE title LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql, value, cb);
}

// Menghitung total data movies
exports.countMoviesModel = (filter, cb) => {
  const sql = `SELECT COUNT("title") AS "totalData" FROM movies WHERE title LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, cb)
}

// Membaca data movie berdasarakan id (Read)
exports.readMovieModel = (id, cb) => {
  const sql = 'SELECT * FROM movies WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data movie (Update)
exports.updateMovieModel = (id, data, cb) => {
  const sql = `UPDATE "movies" SET
  "title"=COALESCE(NULLIF($1, ''), "title"),
  "picture"=COALESCE(NULLIF($2, ''), "picture"),
  "releaseDate"=$3,
  "director"=COALESCE(NULLIF($4, ''), "director"),
  "duration"=$5,
  "synopsis"=COALESCE(NULLIF($6, ''), "synopsis")
  WHERE "id"=$7 RETURNING *`;
  const value = [data.title, data.picture, data.releaseDate, data.director, data.duration, data.synopsis, id];
  db.query(sql, value, cb);
}

// Menghapus data movie (Delete)
exports.deleteMovieModel = (id, cb) => {
  const sql = 'DELETE FROM "movies" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}
