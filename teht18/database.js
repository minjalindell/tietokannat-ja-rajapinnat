const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Bungee96',
  database: 'testi'
});
module.exports = connection;