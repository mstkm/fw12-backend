const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data cinema (Create)
exports.createCinemaModel = (data, cb) => {
  const sql = 'INSERT INTO cinemas ("picture", "name", "address", "city") VALUES ($1, $2, $3, $4)';
  const value = [data.picture, data.name, data.address, data.city];
  db.query(sql, value, cb);
}

// Membaca semua data cinemas (Read)
exports.readAllCinemasModel = (cb) => {
  const sql = 'SELECT * FROM cinemas';
  db.query(sql, cb);
}

// Membaca data cinema berdasarkan id (Read)
exports.readCinemaModel = (id, cb) => {
  const sql = 'SELECT * FROM cinemas WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data cinema (Update)
exports.updateCinemaModel = (id, data, cb) => {
  const sql = 'UPDATE cinemas SET "picture"=$1, "name"=$2, "address"=$3, "city"=$4 WHERE "id"=$5 RETURNING *';
  const value = [data.picture, data.name, data.address, data.city, id];
  db.query(sql, value, cb);
}

// Menghapus data cinema (Delete)
exports.deleteCinemaModel = (id, cb) => {
  const sql = 'DELETE FROM cinemas WHERE "id"=$1 RETURNING *'
  const value = [id];
  db.query(sql, value, cb);
}
