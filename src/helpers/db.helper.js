const {Pool} = require('pg')

// Mengkoneksikan database
const db = new Pool({
  // connectionString: "postgressql://postgres:1@localhost:5432/karcis?schema=public"
  connectionString: "postgresql://postgres:Jf34HF9GeWllYd8j@db.hsrutyxbyqdxverovejj.supabase.co:5432/postgres"
})

db.connect((err) => {
  if (err) {
    console.log('Database is not connect')
  } else {
    console.log('Database is connect')
  }
})

module.exports = db
