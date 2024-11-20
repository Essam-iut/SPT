import {drizzle} 
import mysql from 'mysql2/promise';
// const mysql = require('mysql2');
const connection = await mysql.createConnection({
  host: 'localhost',
  port: 3306,           // Default MySQL port
  user: 'root',
  password: 'essam',
  database: 'spt',
});

export const db = drizzle(connection)