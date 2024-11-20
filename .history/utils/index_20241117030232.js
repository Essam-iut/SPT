import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "local host",
  user: "root",
  database: "database",
  password:''
});

const db = drizzle({ client: connection });
