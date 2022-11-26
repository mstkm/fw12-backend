const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data genre (Create)
exports.createGenreModel = (data, cb) => {
  const sql = 'INSERT INTO genre ("name") VALUES ($1) RETURNING *';
  const value = [data.name];
  db.query(sql, value, cb);
}

// Membaca data semua genres (Read)
exports.readAllGenresModel = (cb) => {
  const sql = 'SELECT * FROM genre';
  db.query(sql, cb);
}
// Membaca data genre berdasarkan id (Read)
exports.readGenreModel = (id, cb) => {
  const sql = 'SELECT * FROM genre WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data genre (Update)
exports.updateGenreModel = (id, data, cb) => {
  const sql = `UPDATE genre SET "name"=COALESCE(NULLIF($1, ''), "name") WHERE "id"=$2 RETURNING *`;
  const value = [data.name, id];
  db.query(sql, value, cb);
}

// Menghapus data genre (DELETE)
exports.deleteGenreModel = (id, cb) => {
  const sql = 'DELETE FROM genre WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}
