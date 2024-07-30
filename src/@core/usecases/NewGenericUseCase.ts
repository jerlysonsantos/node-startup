import { Inject, Injectable } from '@injection-dependency';
import { Generic } from 'src/@core/entity/Generic';
import { IGenericRepository } from 'src/@core/repository/IGenericRepository';

export interface INewGenericUseCase {
  execute(generic: Generic): void;
}

export class NewGenericUseCase implements INewGenericUseCase {
  @Inject('IGenericRepository')
  private genericRepository: IGenericRepository;

  async execute(generic: Generic) {
    return this.genericRepository.create(generic);
  }
}
