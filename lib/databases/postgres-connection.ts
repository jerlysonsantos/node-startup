import { Client } from 'pg';
import { pgConfig } from 'config/database';

export { PostgresConnection };

class PostgresConnection {
  private static _instance: PostgresConnection;

  private _connection: Client;

  constructor() {
    this._connection = new Client({
      ...pgConfig,
    });

    try {
      this._connection.connect();
    } catch (error) {
      console.error(error.message);
    }
  }

  get connection() {
    return this._connection;
  }

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new PostgresConnection();
    return this._instance;
  }
}
