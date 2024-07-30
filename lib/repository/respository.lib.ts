import { PostgresConnection } from '../databases/postgres-connection';

export class Repository {
  async queryFirst<T>(queryString: string, values: any[] = []) {
    return new Promise<T>((resolve, reject) => {
      PostgresConnection.getInstance().connection.query<T>(queryString, values, (error, result) => {
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
      PostgresConnection.getInstance().connection.query<T>(queryString, values, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      });
    });
  }
}