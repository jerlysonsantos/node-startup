import { Client } from 'pg';
import { connection } from '../../config/database';

export class Repository {
  protected connection: Client;

  constructor() {
    this.connection = connection;
  }
}
