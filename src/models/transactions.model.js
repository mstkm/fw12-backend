const db = require('../helpers/db.helper')

// Membuat data transaction (Create)
exports.createTransactionModel = (data, cb) => {
  const sql = 'INSERT INTO "transactions" ("bookingDate", "movieId", "cinemaId", "movieScheduleId", "fullName", "email", "phoneNumber", "statusId") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
  const value = [data.bookingDate, data.movieId, data.cinemaId, data.movieScheduleId, data.fullName, data.email, data.phoneNumber, data.statusId];
  db.query(sql, value, cb);
}

// Membaca data transactions (Read)
exports.readAllTransactionModel = (filter, cb) => {
  const sql = `SELECT * FROM "transactions" WHERE "fullName" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql, value, cb);
}

// Menghitung total data casts
exports.countTransactionsModel = (filter, cb) => {
  const sql = `SELECT COUNT("fullName") AS "totalData" FROM "transactions" WHERE "fullName" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, cb)
}

// Membaca data transactions berdsarakan id (Read)
exports.readTransactionModel = (id, cb) => {
  const sql = 'SELECT * FROM "transactions" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data transaction (Update)
exports.updateTransactionModel = (id, data, cb) => {
  const sql = `UPDATE "transactions" SET "bookingDate"=$1, "movieId"=COALESCE(NULLIF($2, 0), "movieId"), "cinemaId"=COALESCE(NULLIF($3, 0), "cinemaId"), "movieScheduleId"=COALESCE(NULLIF($4, 0), "movieScheduleId"), "fullName"=COALESCE(NULLIF($5, ''), "fullName"), "email"=COALESCE(NULLIF($6, ''), "email"), "phoneNumber"=COALESCE(NULLIF($7, ''), "phoneNumber"), "statusId"=COALESCE(NULLIF($8, 0), "statusId") WHERE "id"=$9 RETURNING*`;
  const value = [data.bookingDate, Number(data.movieId), Number(data.cinemaId), Number(data.movieScheduleId), data.fullName, data.email, data.phoneNumber, Number(data.statusId), id];
  db.query(sql, value, cb);
}

// Menghapus data transaction (Delete)
exports.deleteTransactionModel = (id, cb) => {
  const sql = 'DELETE FROM "transactions" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}
