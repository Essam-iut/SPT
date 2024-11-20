require('dotenv').config();
const { defineConfig } = require('drizzle-kit');

module.exports = defineConfig({
  out: './drizzle',
  schema: './src/db/schema.js',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});