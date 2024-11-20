import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

async function createDBConnection() {
  // Create a MySQL connection pool
  const pool = mysql.createPool({
    host: "localhost",  // Replace "local host" with "localhost"
    user: "root",
    database: "mms",
    password: "essam",
    port
  });

  // Connect Drizzle ORM with the MySQL pool
  const db = drizzle(pool); // Updated to pass the pool directly

  return db;
}

// Example usage
(async () => {
  const db = await createDBConnection();

  // Perform database operations
  console.log("Drizzle is connected!");
})();
