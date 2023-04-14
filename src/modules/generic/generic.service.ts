import { Response, Request } from 'express';

import { GenericRepository } from './repository/generic.repository';
import { Injectable, Inject } from '@injection-dependency';

@Injectable('genericService')
class GenericService {
  @Inject('genericRepository')
  genericRepository: GenericRepository;

  constructor() {}
}

export { GenericService };
