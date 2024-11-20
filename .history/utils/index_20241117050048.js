const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,           // Default MySQL port
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});
