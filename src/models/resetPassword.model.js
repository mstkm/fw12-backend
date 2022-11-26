const db = require('../helpers/db.helper')

// Membuat data resetPassword (Create)
exports.createResetPasswordModel = (data, cb) => {
  const sql = 'INSERT INTO "resetPassword" ("email", "userId", "code") VALUES ($1, $2, $3) RETURNING *';
  const value = [data.email, data.userId, data.code];
  db.query(sql, value, cb);
}

// Membaca data resetPassword (Read)
exports.readAllResetPasswordModel = (cb) => {
  const sql = 'SELECT * FROM "resetPassword"';
  db.query(sql, cb);
}
// Membaca data resetPassword berdasarkan id (Read)
exports.readResetPasswordModel = (id, cb) => {
  const sql = 'SELECT * FROM "resetPassword" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}

// Mengupdate data resetPassword (Update)
exports.updateResetPasswordModel = (id, data, cb) => {
  const sql = `UPDATE "resetPassword" SET "email"=COALESCE(NULLIF($1, ''), "email"), "userId"=COALESCE(NULLIF($2, 0), "userId"), "code"=COALESCE(NULLIF($3, ''), "code") WHERE "id"=$4 RETURNING *`;
  const value = [data.email, Number(data.userId), data.code, id];
  db.query(sql, value, cb);
}

// Menghapus data resetPasword (delete)
exports.deleteResetPasswordModel = (id, cb) => {
  const sql = 'DELETE FROM "resetPassword" WHERE "id"=$1';
  const value = [id];
  db.query(sql, value, cb);
}