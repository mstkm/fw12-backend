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

// List movie schedule by movie id
exports.readListMovieScheduleModel = (id, city, date, cb) => {
  const sql = `SELECT ms.id, ms."movieId", ms."cinemaId", price, "startDate", "endDate", c.picture AS "cinemaPicture", c.name AS "cinemaName", c.address, c.city, array_agg(mst.time) AS time FROM "movieSchedule" ms
  JOIN cinemas c ON c.id = ms."cinemaId"
  JOIN "movieScheduleTimes" mst ON mst."movieScheduleId" = ms.id
  WHERE ms."movieId" = $1 AND c.city = $2 AND $3 BETWEEN ms."startDate" AND ms."endDate"
  GROUP BY ms.id, c.picture, c.name, c.address, c.city;`
  const value = [id, city, date]
  db.query(sql, value, cb)
}


// Mengupdate data movieSchedule (Update)
exports.updateMovieScheduleModel = (id, data, cb) => {
  const sql = `UPDATE "movieSchedule" SET "movieId"=COALESCE(NULLIF($1, '')::INT, "movieId"), "cinemaId"=COALESCE(NULLIF($2, '')::INT, "cinemaId"), "price"=COALESCE(NULLIF($3, '')::BIGINT, "price"), "startDate"=COALESCE(NULLIF($4, '')::DATE, "startDate"), "endDate"=COALESCE(NULLIF($5, '')::DATE, "endDate") WHERE "id"=$6 RETURNING *`;
  const value = [data.movieId, data.cinemaId, data.price, data.startDate, data.endDate, id];
  db.query(sql, value, cb);
}

// Menghapus data movieSchedule (Delete)
exports.deleteMovieScheduleModel = (id, cb) => {
  const sql = 'DELETE FROM "movieSchedule" WHERE "id"=$1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
}
