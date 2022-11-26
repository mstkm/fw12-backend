const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data movieSchedule (Create)
exports.createMovieScheduleModel = (data, cb) => {
  const sql = 'INSERT INTO "movieSchedule" ("movieId", "cinemaId", "price", "startDate", "endDate") VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const value = [data.movieId, data.cinemaId, data.price, data.startDate, data.endDate];
  db.query(sql, value, cb);
}

// Membaca data movieSchedule (Read)
exports.readAllMovieScheduleModel = (cb) => {
  const sql = 'SELECT * FROM "movieSchedule"';
  db.query(sql, cb);
}
// Membaca data movieSchedule berdasarkan id (Read)
exports.readMovieScheduleModel = (id, cb) => {
  const sql = 'SELECT * FROM "movieSchedule" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data movieSchedule (Update)
exports.updateMovieScheduleModel = (id, data, cb) => {
  const sql = `UPDATE "movieSchedule" SET "movieId"=COALESCE(NULLIF($1, 0), "movieId"), "cinemaId"=COALESCE(NULLIF($2, 0), "cinemaId"), "price"=COALESCE(NULLIF($3, 0), "price"), "startDate"=$4, "endDate"=$5 WHERE "id"=$6 RETURNING *`;
  const value = [Number(data.movieId), Number(data.cinemaId), Number(data.price), data.startDate, data.endDate, id];
  db.query(sql, value, cb);
}

// Menghapus data movieSchedule (Delete)
exports.deleteMovieScheduleModel = (id, cb) => {
  const sql = 'DELETE FROM "movieSchedule" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}
