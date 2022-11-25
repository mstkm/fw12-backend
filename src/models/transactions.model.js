const db = require('../helpers/db.helper')

// Membuat data transaction (Create)
exports.createTransactionModel = (data, cb) => {
  const sql = 'INSERT INTO "transactions" ("bookingDate", "movieId", "cinemaId", "movieScheduleId", "fullName", "email", "phoneNumber", "statusId") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
  const value = [data.bookingDate, data.movieId, data.cinemaId, data.movieScheduleId, data.fullName, data.email, data.phoneNumber, data.statusId];
  db.query(sql, value, cb);
}

// Membaca data transactions (Read)
exports.readAllTransactionModel = (cb) => {
  const sql = 'SELECT * FROM "transactions"';
  db.query(sql, cb);
}
// Membaca data transactions berdsarakan id (Read)
exports.readTransactionModel = (id, cb) => {
  const sql = 'SELECT * FROM "transactions" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data transaction (Update)
exports.updateTransactionModel = (id, data, cb) => {
  const sql = 'UPDATE "transactions" SET "bookingDate"=$1, "movieId"=$2, "cinemaId"=$3, "movieScheduleId"=$4, "fullName"=$5, "email"=$6, "phoneNumber"=$7, "statusId"= $8 WHERE "id"=$9 RETURNING*';
  const value = [data.bookingDate, data.movieId, data.cinemaId, data.movieScheduleId, data.fullName, data.email, data.phoneNumber, data.statusId, id];
  db.query(sql, value, cb);
}

// Menghapus data transaction (Delete)
exports.deleteTransactionModel = (id, cb) => {
  const sql = 'DELETE FROM "transactions" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}
