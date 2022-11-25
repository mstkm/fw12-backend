const db = require('../helpers/db.helper')

// Membuat data subscriber (Create)
exports.createSubscriberModel = (data, cb) => {
  const sql = 'INSERT INTO "subscribers" ("email") VALUES ($1) RETURNING *';
  const value = [data.email];
  db.query(sql, value, cb);
}

// Membaca data subscribers (Read)
exports.readAllSubscriberModel = (cb) => {
  const sql = 'SELECT * FROM "subscribers"';
  db.query(sql, cb);
}
// Membaca data subscribers berdasarkan id (Read)
exports.readSubscriberModel = (id, cb) => {
  const sql = 'SELECT * FROM "subscribers" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data subscriber (Update)
exports.updateSubscriberModel = (id, data, cb) => {
  const sql = 'UPDATE "subscribers" SET "email"=$1 WHERE "id"=$2 RETURNING *';
  const value = [data.email, id];
  db.query(sql, value, cb);
}

// Menghapus data subscriber (Delete)
exports.deleteSubscriberModel = (id, cb) => {
  const sql = 'DELETE FROM "subscribers"WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}
