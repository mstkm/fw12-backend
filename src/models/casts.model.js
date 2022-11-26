const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data casts (Create)
exports.createCastModel = (data, cb) => {
  const sql = 'INSERT INTO casts ("name") VALUES ($1)';
  const value = [data.name];
  db.query(sql, value, cb)
}

// Membaca data semua casts (Read)
exports.readAllCastsModel = (cb) => {
  const sql = 'SELECT * FROM casts';
  db.query(sql, cb);
}
// Membaca data casts berdasarkan id (Read)
exports.readCastModel = (id, cb) => {
  const sql = 'SELECT * FROM casts WHERE id=$1';
  const value = [id]
  db.query(sql, value, cb);
}

// Mengupdate data cast (Update)
exports.updateCastModel = (id, data, cb) => {
  const sql = `UPDATE casts SET "name"=COALESCE(NULLIF($1, ''), "name") WHERE "id"=$2 RETURNING*`;
  const value = [data.name, id];
  db.query(sql, value, cb);
}

// Menghapus data cast (Delete)
exports.deleteCastModel = (id, cb) => {
  const sql = 'DELETE FROM casts WHERE "id"=$1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
}
