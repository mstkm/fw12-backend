const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data user (Create)
exports.createUserModel = (data, cb) => {
  const sql = 'INSERT INTO users ("picture", "firstName", "lastName", "phoneNumber", "email", "password") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const value = [data.picture, data.firstName, data.lastName, data.phoneNumber, data.email, data.password];
  db.query(sql, value, cb)
}

// Membaca data semua user (Read)
exports.readAllUserModel = (filter, cb) => {
  const sql = `SELECT * FROM users WHERE "firstName" LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`]
  db.query(sql, value, cb);
}

// Menghitung total data users
exports.countUsersModel = (filter, cb) => {
  const sql = `SELECT COUNT("firstName") AS "totalData" FROM users WHERE "firstName" LIKE $1`;
  const value = [`%${filter.search}%`]
  db.query(sql, value, cb)
}

// Membaca data user berdasarkan id (Read)
exports.readUserModel = (id, cb) => {
  const sql = 'SELECT * FROM users WHERE id=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data user (Update)
exports.updateUserModel = (id, data, cb) => {
  const sql = `UPDATE users SET "picture"=COALESCE(NULLIF($1, ''), "picture"), "firstName"=COALESCE(NULLIF($2, ''), "firstName"), "lastName"=COALESCE(NULLIF($3, ''), "lastName"), "phoneNumber"=COALESCE(NULLIF($4, ''), "phoneNumber"), "email"=COALESCE(NULLIF($5, ''), "email"), "password"=COALESCE(NULLIF($6, ''), "password") WHERE id=$7 RETURNING *`
  const value = [data.picture, data.firstName, data.lastName, data.phoneNumber, data.email, data.password, id]
  db.query(sql, value, cb);
}

// Menghapus data user (Update)
exports.deleteUserModel = (id, cb) => {
  const sql = 'DELETE FROM users WHERE id=$1';
  const value = [id];
  db.query(sql, value, cb)
}
