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
  // const sql = `SELECT m.id, m.picture, m.title, string_agg(DISTINCT g.name, ', ') AS genre, string_agg(DISTINCT c.name, ', ') AS casts, m."releaseDate", m.director, m.duration, m.synopsis FROM movies m
  // JOIN "movieGenre" mg ON mg."movieId" = m.id
  // JOIN genre g ON mg."genreId" = g.id
  // JOIN "movieCasts" mc ON mc."movieId" = m.id
  // JOIN casts c ON mc."castsId" = c.id
  // WHERE title LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const sql = `SELECT m.id, m.picture, m.title, string_agg(DISTINCT g.name, ', ') AS genre, string_agg(DISTINCT c.name, ', ') AS casts, m."releaseDate", m.director, m.duration, m.synopsis, m."createdAt", m."updatedAt" FROM movies m
  JOIN "movieGenre" mg ON mg."movieId" = m.id
  JOIN genre g ON mg."genreId" = g.id
  JOIN "movieCasts" mc ON mc."movieId" = m.id
  JOIN casts c ON mc."castsId" = c.id
WHERE title LIKE $3
GROUP BY m.id
ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`
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
  const sql = `SELECT m.id, m.picture, m.title, string_agg(DISTINCT g.name, ', ') AS genre, string_agg(DISTINCT c.name, ', ') AS casts, m."releaseDate", m.director, m.duration, m.synopsis FROM movies m
  JOIN "movieGenre" mg ON mg."movieId" = m.id
  JOIN genre g ON mg."genreId" = g.id
  JOIN "movieCasts" mc ON mc."movieId" = m.id
  JOIN casts c ON mc."castsId" = c.id
  WHERE m.id = $1
  GROUP BY m.id`;
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data movie (Update)
exports.updateMovieModel = (id, data, cb) => {
  const sql = `UPDATE "movies" SET
  "title"=COALESCE(NULLIF($1, ''), "title"),
  "picture"=COALESCE(NULLIF($2, ''), "picture"),
  "releaseDate"=COALESCE(NULLIF($3, '')::DATE, "releaseDate"),
  "director"=COALESCE(NULLIF($4, ''), "director"),
  "duration"=COALESCE(NULLIF($5, '')::TIME, "duration"),
  "synopsis"=COALESCE(NULLIF($6, ''), "synopsis")
  WHERE "id"=$7 RETURNING *`;
  const value = [data.title, data.picture, data.releaseDate, data.director, data.duration, data.synopsis, id];
  db.query(sql, value, cb);
}

// Menghapus data movie (Delete)
exports.deleteMovieModel = (id, cb) => {
  const sql = 'DELETE FROM "movies" WHERE "id"=$1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
}

// Menghitung total data movies untuk nowShowing
exports.countNowShowingModel = (data, cb) => {
  const sql = `SELECT COUNT("title") AS "totalData" FROM "movies" m
  JOIN "movieSchedule" ms ON ms."movieId" = m.id
  WHERE current_date BETWEEN ms."startDate" AND ms."endDate" AND title LIKE $1`;
  const value = [`%${data.search}%`]
  db.query(sql, value, cb)
}

exports.nowShowingModel = (data, cb) => {
  const sql = `SELECT m.id, m.picture, m.title, string_agg(g.name, ', ') AS genre, ms."startDate", ms."endDate" FROM "movies" m
  JOIN "movieGenre" mg ON mg."movieId" = m.id
  JOIN "genre" g ON g.id = mg."genreId"
  JOIN "movieSchedule" ms ON ms."movieId" = m.id
  WHERE current_date BETWEEN ms."startDate" AND ms."endDate" AND title LIKE $3
  GROUP BY m.id, ms.id
  ORDER BY "${data.sortBy}" ${data.sort} LIMIT $1 OFFSET $2;`
  const value = [data.limit, data.offset, `%${data.search}%`]
  db.query(sql, value, cb);
}

// Menghitung total data movies untuk upcoming
exports.countUpcomingModel = (data, cb) => {
  const sql = `SELECT COUNT("title") AS "totalData" FROM "movies" m
  JOIN "movieSchedule" ms ON ms."movieId" = m.id
  WHERE date_part('month', "releaseDate")::TEXT = COALESCE(NULLIF($1, ''), date_part('month', current_date)::TEXT)
  AND date_part('year', "releaseDate")::TEXT = COALESCE(NULLIF($2, ''), date_part('year', current_date)::TEXT) AND title LIKE $3`;
  const value = [data.month, data.year, `%${data.search}%`]
  db.query(sql, value, cb)
}

exports.upcomingModel = (data, cb) => {
  const sql = `SELECT m.id, m.picture, m.title, string_agg(g.name, ', ') AS genre, m."releaseDate"::DATE FROM "movies" m
  JOIN "movieGenre" mg ON mg."movieId" = m.id
  JOIN "genre" g ON g.id = mg."genreId"
  WHERE date_part('month', "releaseDate")::TEXT = COALESCE(NULLIF($1, ''), date_part('month', current_date)::TEXT)
  AND date_part('year', "releaseDate")::TEXT = COALESCE(NULLIF($2, ''), date_part('year', current_date)::TEXT) AND title LIKE $3
  GROUP BY m.id
  ORDER BY "${data.sortBy}" ${data.sort} LIMIT $4 OFFSET $5`;
  const value = [data.month, data.year, `%${data.search}%`, data.limit, data.offset];
  db.query(sql, value, cb)
}
