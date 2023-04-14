import { Client } from 'pg';
import { connection } from '../../database/config/connection';

export class Repository {
  protected connection: Client;

  constructor() {
    this.connection = connection;
  }
}
