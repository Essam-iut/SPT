import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql2",
  schema: "./utils/schema.js",
  out: "./drizzle"
});
