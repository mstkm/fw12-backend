const db = require('../helpers/db.helper')

// Membuat data subscriber (Create)
exports.createSubscriberModel = (data, cb) => {
  const sql = 'INSERT INTO "subscribers" ("email") VALUES ($1) RETURNING *';
  const value = [data.email];
  db.query(sql, value, cb);
}

// Membaca data subscribers (Read)
exports.readAllSubscriberModel = (filter, cb) => {
  const sql = `SELECT * FROM "subscribers" WHERE email LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql, value, cb);
}

// Menghitung total data subscribers
exports.countSubscribersModel = (filter, cb) => {
  const sql = `SELECT COUNT("email") AS "totalData" FROM "subscribers" WHERE email LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, cb)
}

// Membaca data subscribers berdasarkan id (Read)
exports.readSubscriberModel = (id, cb) => {
  const sql = 'SELECT * FROM "subscribers" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data subscriber (Update)
exports.updateSubscriberModel = (id, data, cb) => {
  const sql = `UPDATE "subscribers" SET "email"=COALESCE(NULLIF($1, ''), "email") WHERE "id"=$2 RETURNING *`;
  const value = [data.email, id];
  db.query(sql, value, cb);
}

// Menghapus data subscriber (Delete)
exports.deleteSubscriberModel = (id, cb) => {
  const sql = 'DELETE FROM "subscribers"WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}
