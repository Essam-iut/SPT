import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql2",
  schema: "./ut",
  out: "./drizzle",
  port:'3306'
});
