import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
  
const poolConnection = mysql.createPool({
  host: "host",
  user: "user",
  database: "database",
});
const db = drizzle({ client: poolConnection });

// or if you need client connection
async function main() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mms"
  });
  const db = drizzle({ client: connection });
}
main();
