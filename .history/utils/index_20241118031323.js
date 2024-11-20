import { Connection } from 'next/server';
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,           // Default MySQL port
  user: 'root',
  password: 'essam',
  database: 'spt',
});

export const db = drizzle(Connection)