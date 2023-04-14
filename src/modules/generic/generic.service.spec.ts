import { GenericService } from './generic.service';
import { Request } from 'express';
import { GenericRepository } from './repository/generic.repository';
import TestProviders from '../../lib/jest-providers/jest-providers.lib';

describe('ImageUploadService', () => {
  let service: GenericService;
  let genericRepository: GenericRepository;

  beforeEach(() => {
    genericRepository = {
      create: jest.fn(),
      getSourceSet: jest.fn(),
      insertFileChildren: jest.fn(),
    } as any;

    TestProviders.providers([
      {
        token: 'genericRepository',
        useValue: genericRepository,
      },
    ]);
  });

  beforeEach(() => {
    service = new GenericService();
  });

  describe('generic', () => {
    it('should 200', async () => {});
  });
});
