const db = require('../helpers/db.helper')

// Membuat data status (Create)
exports.createStatusModel = (data, cb) => {
  const sql = 'INSERT INTO "status" ("nama") VALUES ($1) RETURNING *';
  const value = [data.nama];
  db.query(sql, value, cb);
}

// Membaca data status (Read)
exports.readAllStatusModel = (cb) => {
  const sql = 'SELECT * FROM "status"';
  db.query(sql, cb);
}
// Membaca data status berdasarkan id (Read)
exports.readStatusModel = (id, cb) => {
  const sql = 'SELECT * FROM "status" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupadte data status (Update)
exports.updateStatusModel = (id, data, cb) => {
  const sql = 'UPDATE "status" SET "nama"=$1 WHERE "id"=$2 RETURNING *';
  const value = [data.nama, id];
  db.query(sql, value, cb);
}

// Menghapus data status (Delete)
exports.deleteStatusModel = (id, cb) => {
  const sql = 'DELETE FROM "status" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}
