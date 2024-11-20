import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql2",
  schema: "./src/schema.ts",
  out: "./drizzle",
  port=''
});
