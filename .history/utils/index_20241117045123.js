require('dotenv').config();
const { drizzle } = require('drizzle-orm/mysql2');
const mysql = require('mysql2');

// Create a single MySQL connection
const connection = mysql.createConnection(process.env.DATABASE_URL);

// Initialize Drizzle with the connection
const db = drizzle(connection);

module.exports = db;
