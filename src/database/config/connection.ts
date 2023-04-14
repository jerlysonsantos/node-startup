import { Client } from 'pg';
const { host, port, user, password, database } = require('../../config/database');

const connection = new Client({
  host,
  port,
  user,
  password,
  database,
});

try {
  connection.connect();
} catch (error) {
  console.error(error.message);
}

export { connection };
