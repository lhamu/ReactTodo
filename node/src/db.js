import pg from 'pg';

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:upechhya@localhost:5432/todo';
const client = new pg.Client(connectionString);

export function connectClient() {
  client.connect();
}

export function getClient() {
  if (client) {
    return client;
  }

  return connectClient();
}