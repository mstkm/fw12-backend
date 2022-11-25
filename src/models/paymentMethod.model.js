const db = require('../helpers/db.helper')


// Membuat data paymentMethod (Create)
exports.createPaymentMethodModel = (data, cb) => {
  const sql = 'INSERT INTO "paymentMethod" ("picture", "name") VALUES ($1, $2) RETURNING *';
  const value = [data.picture, data.name];
  db.query(sql, value, cb);
}

// Membaca data paymentMethod (Read)
exports.readAllPaymentMethodModel = (cb) => {
  const sql = 'SELECT * FROM "paymentMethod"';
  db.query(sql, cb);
}
// Membaca data paymentMethod berdasarkan id (Read)
exports.readPaymentMethodModel = (id, cb) => {
  const sql = 'SELECT * FROM "paymentMethod" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data paymentMethod (Update)
exports.updatePaymentMethodModel = (id, data, cb) => {
  const sql = 'UPDATE "paymentMethod" SET "picture"=$1, "name"=$2 WHERE "id"=$3 RETURNING *';
  const value = [data.picture, data.name, id];
  db.query(sql, value, cb);
}

// Menghapus data paymentMethod (Delete)
exports.deletePaymentMethodModel = (id, cb) => {
  const sql = 'DELETE FROM "paymentMethod" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}
