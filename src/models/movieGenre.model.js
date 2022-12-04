const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data movieGenre (Create)
exports.createMovieGenreModel = (data, cb) => {
  const sql = 'INSERT INTO "movieGenre" ("movieId", "genreId") VALUES ($1, $2) RETURNING *';
  const value = [data.movieId, data.genreId];
  db.query(sql, value, cb);
}

// Membaca data semua movieGenre (Read)
exports.readAllMovieGenresModel = (cb) => {
  const sql = 'SELECT * FROM "movieGenre"';
  db.query(sql, cb);
}
// Membaca data movieGenre berdasarkan id (Read)
exports.readMovieGenreModel = (id, cb) => {
  const sql = 'SELECT * FROM "movieGenre" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data movieGenre (Update)
exports.updateMovieGenreModel = (id, data, cb) => {
  const sql = `UPDATE "movieGenre" SET "movieId"=COALESCE(NULLIF($1, '')::INT, "movieId"), "genreId"=COALESCE(NULLIF($2, '')::INT, "genreId") WHERE "id"=$3 RETURNING *`;
  const value = [data.movieId, data.genreId, id];
  db.query(sql, value, cb);
}

// Mneghapus data movieGenre (Delete)
exports.deleteMovieGenreModel = (id, cb) => {
  const sql = 'DELETE FROM "movieGenre" WHERE "id"=$1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
}
