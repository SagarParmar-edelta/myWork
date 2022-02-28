const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'admin@123',
    database: 'edelta',
    host: 'localhost',
    port: '5432',
})

module.exports = pool
