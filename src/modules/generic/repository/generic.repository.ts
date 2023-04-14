import { Client } from 'pg';
import { Repository } from '../../../lib/repository/respository.lib';
import { connection } from '../../../config/database';
import { Injectable } from '../../../lib/dependency-injection/injectable.decorator';
import { Generic } from '../models/generic.model';

@Injectable('genericRepository')
export class GenericRepository extends Repository {
  constructor() {
    super();
  }
}
