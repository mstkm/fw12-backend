const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data cinema (Create)
exports.createCinemaModel = (data, cb) => {
  const sql = 'INSERT INTO cinemas ("picture", "name", "address", "city") VALUES ($1, $2, $3, $4) RETURNING *';
  const value = [data.picture, data.name, data.address, data.city];
  db.query(sql, value, cb);
}

// Membaca semua data cinemas (Read)
exports.readAllCinemasModel = (filter, cb) => {
  const sql = `SELECT * FROM cinemas WHERE name LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`];
  db.query(sql, value, cb);
}

// Menghitung total data cinemas
exports.countCinemasModel = (filter, cb) => {
  const sql = `SELECT COUNT("name") AS "totalData" FROM cinemas WHERE name LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, cb)
}

// Membaca data cinema berdasarkan id (Read)
exports.readCinemaModel = (id, cb) => {
  const sql = 'SELECT * FROM cinemas WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data cinema (Update)
exports.updateCinemaModel = (id, data, cb) => {
  const sql = `UPDATE cinemas SET "picture"=COALESCE(NULLIF($1, ''), "picture"), "name"=COALESCE(NULLIF($2, ''), "name"), "address"=COALESCE(NULLIF($3, ''), "address"), "city"=COALESCE(NULLIF($4, ''), "city") WHERE "id"=$5 RETURNING *`;
  const value = [data.picture, data.name, data.address, data.city, id];
  db.query(sql, value, cb);
}

// Menghapus data cinema (Delete)
exports.deleteCinemaModel = (id, cb) => {
  const sql = 'DELETE FROM cinemas WHERE "id"=$1 RETURNING *'
  const value = [id];
  db.query(sql, value, cb);
}
