require('dotenv').config();
const { defineConfig } = require('drizzle-kit');

module.exports = defineConfig({
  out: './drizzle',
  schema: './utils/schema.js',
  dialect: 'mysql',
  dbCredentials: {
    host: 'localhost',
    port: 3306,           // Default MySQL port
    user: 'root',
    password: 'essam',
    database: 'spt'  },
});
