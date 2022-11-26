const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data movieScheduleTimes (Create)
exports.createMovieScheduleTimeModel = (data, cb) => {
  const sql = 'INSERT INTO "movieScheduleTimes" ("time", "movieScheduleId") VALUES ($1, $2) RETURNING *';
  const value = [data.time, data.movieScheduleId];
  db.query(sql, value, cb);
}

// Membaca data movieScheduleTimes (Read)
exports.readAllMovieScheduleTimesModel = (cb) => {
  const sql = 'SELECT * FROM "movieScheduleTimes"';
  db.query(sql, cb);
}
// Membaca data movieScheduleTimes berdasarkan id (Read)
exports.readMovieScheduleTimeModel = (id, cb) => {
  const sql = 'SELECT * FROM "movieScheduleTimes" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data movieScheduleTimes (Update)
exports.updateMovieScheduleTimeModel = (id, data, cb) => {
  const sql = `UPDATE "movieScheduleTimes" SET "time"=$1, "movieScheduleId"=COALESCE(NULLIF($2, 0), "movieScheduleId") WHERE "id"=$3 RETURNING *`;
  const value = [data.time, Number(data.movieScheduleId), id];
  db.query(sql, value, cb);
}

// Menghapus data movieScheduleTimes (Delete)
exports.deleteMovieScheduleTimeModel = (id, cb) => {
  const sql = 'DELETE FROM "movieScheduleTimes" WHERE "id"=$1'
  const value = [id];
  db.query(sql, value, cb);
}
