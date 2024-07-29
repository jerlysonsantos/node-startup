import { Client } from 'pg';
import { PostgresConnection } from '../databases/postgres-connection';

export class Repository {
  private _connection: Client;

  constructor() {
    this._connection = PostgresConnection.getInstance().connection;
  }

  async queryFirst<T>(queryString: string, values: any[] = []) {
    return new Promise<T>((resolve, reject) => {
      this._connection.query<T>(queryString, values, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows[0]);
        }
      });
    });
  }

  async query<T>(queryString: string, values: any[] = []) {
    return new Promise<T[]>((resolve, reject) => {
      this._connection.query<T>(queryString, values, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      });
    });
  }
}
