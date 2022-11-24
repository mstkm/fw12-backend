const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data user (Create)
exports.createUserModel = (data, cb) => {
  const sql = 'INSERT INTO users ("picture", "firstName", "lastName", "phoneNumber", "email", "password") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const value = [data.picture, data.firstName, data.lastName, data.phoneNumber, data.email, data.password];
  db.query(sql, value, cb)
}

// Membaca data semua user (Read)
exports.readAllUserModel = (cb) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, cb);
}
// Membaca data user berdasarkan id (Read)
exports.readUserModel = (id, cb) => {
  const sql = 'SELECT * FROM users WHERE id=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data user (Update)
exports.updateUserModel = (id, data, cb) => {
  const sql = 'UPDATE users SET "picture"=$1, "firstName"=$2, "lastName"=$3, "phoneNumber"=$4, "email"=$5, "password"=$6 WHERE id=$7 RETURNING *'
  const value = [data.picture, data.firstName, data.lastName, data.phoneNumber, data.email, data.password, id]
  db.query(sql, value, cb);
}

// Menghapus data user (Update)
exports.deleteUserModel = (id, cb) => {
  const sql = 'DELETE FROM users WHERE id=$1';
  const value = [id];
  db.query(sql, value, cb)
}
