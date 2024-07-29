import { Inject, Injectable } from '@injection-dependency';
import { Generic } from 'src/@core/entity/Generic';
import { IGenericRepository } from 'src/@core/repository/IGenericRepository';

export interface INewGenericUseCase {
  execute(): void;
}

@Injectable('NewGenericUseCase')
export class NewGenericUseCase implements INewGenericUseCase {
  @Inject('GenericRepository')
  private genericRepository: IGenericRepository;

  async execute() {
    return this.genericRepository.create(new Generic(1));
  }
}
