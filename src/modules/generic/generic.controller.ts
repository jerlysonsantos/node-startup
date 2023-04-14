import { Response, Request } from 'express';

import { GenericService } from './generic.service';

import { Get, Post, Controller } from '@routers';
import { Inject } from '@injection-dependency';

@Controller('/')
class GenericController {
  @Inject('genericService')
  private genericService: GenericService;
}

export { GenericController };
