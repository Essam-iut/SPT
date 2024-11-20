import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.ts',
  dialect: 'mysql2',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
