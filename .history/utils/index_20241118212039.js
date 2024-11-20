import {drizzle} from "drizzle-orm/mysql2"
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  port: 3306,           // Default MySQL port
  user: 'root',
  password: 'essam',
  database: 'spt',
  
});

export const db = drizzle(connection)