import { createClient } from '@libsql/client';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/libsql';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// Would prefer the Express server act as data layer - interface with DB and own auth -
// so we can leave the Next.js app for presentation, and simplify security audits per layer
// todo: move this to express server
const client = createClient({ url: 'file:local.db' });
const db = drizzle(client);

export async function getUser(email: string) {
  const users = await ensureTableExists();

  return db.select().from(users).where(eq(users.email, email));
}

export async function createUser(email: string, password: string) {
  const users = await ensureTableExists();
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);

  return db.insert(users).values({ email, password: hash });
}

async function ensureTableExists() {
  const result = await client.execute(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='User';`,
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
