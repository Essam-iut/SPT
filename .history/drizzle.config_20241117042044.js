import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.js',
  dialect: 'mysql2',
  dbCredentials: {
    host: "localhost",  // Replace "local host" with "localhost"
    user: "root",
    database: "mms",
    password: "essam",
  },
});
