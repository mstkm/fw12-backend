const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data movieCast (Create)
exports.createMovieCastModel = (data, cb) => {
  const sql = 'INSERT INTO "movieCasts" ("movieId", "castsId") VALUES ($1, $2) RETURNING *';
  const value = [data.movieId, data.castsId];
  db.query(sql, value, cb);
}

// Membaca data semua movieCasts (Read)
exports.readAllMovieCastsModel = (cb) => {
  const sql = 'SELECT * FROM "movieCasts"';
  db.query(sql, cb);
}
// Membaca data movieCast berdasarkan id (Read)
exports.readMovieCastModel = (id, cb) => {
  const sql = 'SELECT * FROM "movieCasts" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data movieCast (Update)
exports.updateMovieCastModel = (id, data, cb) => {
  const sql = `UPDATE "movieCasts" SET "movieId"=COALESCE(NULLIF($1, '')::INT, "movieId"), "castsId"=COALESCE(NULLIF($2, '')::INT, "castsId") WHERE "id"=$3 RETURNING *`;
  const value = [data.movieId, data.castsId, id];
  db.query(sql, value, cb);
}

// Menghapus data movieCast (Delete)
exports.deleteMovieCastModel = (id, cb) => {
  const sql = 'DELETE FROM "movieCasts" WHERE "id"=$1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
}
