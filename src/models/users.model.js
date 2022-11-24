const db = require('../helpers/db.helper')

// Model yang bisa digunakan di controller
// Membuat data user (Create)
exports.createUserModel = (data, cb) => {
  db.query(`INSERT INTO users ("picture", "firstName", "lastName", "phoneNumber", "email", "password") VALUES ('${data.picture}', '${data.firstName}', '${data.lastName}', '${data.phoneNumber}', '${data.email}', '${data.password}')`, (error, results, _fields) => {
    if (error) throw new Error(error)
    cb(results.rows)
  })
}

// Membaca data semua user (Read)
exports.readAllUserModel = (cb) => {
  db.query('SELECT * FROM users', (error, results, _fields) => {
    if (error) throw new Error(error)
    cb(results.rows)
  })
}
// Membaca data user berdasarkan id (Read)
exports.readUserModel = (id, cb) => {
  db.query(`SELECT * FROM users WHERE id='${id}'`, (error, results, _fields) => {
    if (error) throw new Error(error)
    cb(results.rows)
  })
}

// Mengupdate data user (Update)
exports.updateUserModel = (id, data, cb) => {
  db.query(`UPDATE users SET "picture"='${data.picture}', "firstName"='${data.firstName}', "lastName"='${data.lastName}', "phoneNumber"='${data.phoneNumber}', "email"='${data.email}', "password"='${data.password}' WHERE id='${id}'`, (error, results, _fields) => {
    if (error) throw new Error(error)
    cb(results.rows)
  })
}

// Menghapus data user (Update)
exports.deleteUserModel = (id, cb) => {
  db.query(`DELETE FROM users WHERE id='${id}'`, (error, results, _fields) => {
    if (error) throw new Error(error)
    cb(results.rows)
  })
}
