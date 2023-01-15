const { Pool } = require('pg')

// Mengkoneksikan database
const db = new Pool({
  connectionString: process.env.DATABASE_URL
})

db.connect((err) => {
  if (err) {
    console.log('Database is not connect')
  } else {
    console.log('Database is connect')
  }
})

module.exports = db
