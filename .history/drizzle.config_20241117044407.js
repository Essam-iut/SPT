import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utile/schema',
  driver: 'mysql',
  dbCredentials: {
    host: "localhost",  // Replace "local host" with "localhost"
    user: "root",
    database: "mms",
    password: "essam",
  },
});
