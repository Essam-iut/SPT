import {drizzle} from "drizzle-orm/mysql2"
import mysql from 'mysql2/promise';

// const mysql = require('mysql2');
const connection = await mysql.createConnection({
  host: 'localhost',
  port: 3306,           // Default MySQL port
  user: 'root',
  password: 'essam',
  database: 'spt',
  waitForConnections: true,
  connectionLimit: 10, // Number of concurrent connections allowed
  queueLimit: 0,
});

export const db = drizzle(connection)