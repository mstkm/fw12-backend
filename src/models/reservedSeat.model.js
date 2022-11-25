const db = require('../helpers/db.helper')

// Membuat data reservedSeat (Create)
exports.createReservedSeatModel = (data, cb) => {
  const sql = 'INSERT INTO "reservedSeat" ("seatNum", "transactionId") VALUES ($1, $2) RETURNING *';
  const value = [data.seatNum, data.transactionId];
  db.query(sql, value, cb);
}

// Membaca data reservedSeat (Read)
exports.readAllReservedSeatModel = (cb) => {
  const sql = 'SELECT * FROM "reservedSeat"';
  db.query(sql, cb);
}
// Membaca data reservedSeat berdasarkan id (Read)
exports.readReservedSeatModel = (id, cb) => {
  const sql = 'SELECT * FROM "reservedSeat" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data reservedSeat (Update)
exports.updateReservedSeatModel = (id, data, cb) => {
  const sql = 'UPDATE "reservedSeat" SET "seatNum"=$1, "transactionId"=$2 WHERE "id"=$3 RETURNING *';
  const value = [data.seatNum, data.transactionId, id];
  db.query(sql, value, cb);
}

// Menghapus data reservedSeat (Delete)
exports.deleteReservedSeatModel = (id, cb) => {
  const sql = 'DELETE FROM "reservedSeat" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}
