import { Repository } from '@repository';
import { Injectable } from '@injection-dependency';
import { Generic } from '../models/generic.model';

@Injectable('genericRepository')
export class GenericRepository extends Repository {
  constructor() {
    super();
  }
}
