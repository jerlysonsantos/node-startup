import { Client } from 'pg';
import { PostgresConnection } from '../databases/postgres-connection';

export class Repository {
  protected connection: Client;

  constructor() {
    this.connection = PostgresConnection.getInstance().connection;
  }
}
