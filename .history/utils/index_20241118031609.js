import { Connection } from 'mysql2/typings/mysql/lib/Connection';
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,           // Default MySQL port
  user: 'root',
  password: 'essam',
  database: 'spt',
});

export const db = drizzle(Connectiononnection)