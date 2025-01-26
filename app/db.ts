import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { eq } from 'drizzle-orm';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from "@libsql/client";

const client = createClient({ url: "file:local.db" });
let db = drizzle(client);

export async function getUser(email: string) {
  const users = await ensureTableExists();
  
  return await db.select().from(users).where(eq(users.email, email));
}

export async function createUser(email: string, password: string) {
  const users = await ensureTableExists();
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);

  return await db.insert(users).values({ email, password: hash });
}

async function ensureTableExists() {
  const result = await client.execute(
      `SELECT name FROM sqlite_master WHERE type='table' AND name='User';`
  );

  if (result.rows.length === 0) {
    console.log("Table 'User' does not exist. Creating...");

    const created = await client.execute(`
      CREATE TABLE User (
        id INTEGER PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT
      );
    `);

    console.log("Table 'User' created successfully.", created);
  } else {
    console.log("Table 'User' already exists.");
  }

  const table = sqliteTable('User', {
    id: integer('id').primaryKey(),
    email: text('email').notNull().unique(),
    password: text('password'),
  });

  return table;
}
