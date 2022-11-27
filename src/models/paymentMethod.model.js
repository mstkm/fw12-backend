const db = require('../helpers/db.helper')


// Membuat data paymentMethod (Create)
exports.createPaymentMethodModel = (data, cb) => {
  const sql = 'INSERT INTO "paymentMethod" ("picture", "name") VALUES ($1, $2) RETURNING *';
  const value = [data.picture, data.name];
  db.query(sql, value, cb);
}

// Membaca data paymentMethod (Read)
exports.readAllPaymentMethodModel = (filter, cb) => {
  const sql = `SELECT * FROM "paymentMethod" WHERE name LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql, value, cb);
}

// Menghitung total data paymentMethod
exports.countPaymentMethodModel = (filter, cb) => {
  const sql = `SELECT COUNT("name") AS "totalData" FROM "paymentMethod" WHERE name LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, cb)
}

// Membaca data paymentMethod berdasarkan id (Read)
exports.readPaymentMethodModel = (id, cb) => {
  const sql = 'SELECT * FROM "paymentMethod" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data paymentMethod (Update)
exports.updatePaymentMethodModel = (id, data, cb) => {
  const sql = `UPDATE "paymentMethod" SET "picture"=COALESCE(NULLIF($1, ''), "picture"), "name"=COALESCE(NULLIF($2, ''), "name") WHERE "id"=$3 RETURNING *`;
  const value = [data.picture, data.name, id];
  db.query(sql, value, cb);
}

// Menghapus data paymentMethod (Delete)
exports.deletePaymentMethodModel = (id, cb) => {
  const sql = 'DELETE FROM "paymentMethod" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}
