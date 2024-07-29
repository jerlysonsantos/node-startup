import { Injectable } from '@injection-dependency';
import { Repository } from '@repository';
import { Generic } from 'src/@core/entity/Generic';
import { IGenericRepository } from 'src/@core/repository/IGenericRepository';

@Injectable('GenericRepository')
export class GenericRepository extends Repository implements IGenericRepository {
  constructor() {
    super();
  }

  async create(entity: Generic) {
    return;
  }

  async update(entity: Generic) {
    return;
  }

  async delete(id: number) {
    return;
  }

  async getById(id: number) {
    try {
      return await this.queryFirst<Generic>('SELECT * FROM generic WHERE id = ?', [id]);
    } catch (error) {
      throw new Error('Error on getting generic');
    }
  }

  async getAll() {
    return [new Generic(1)];
  }
}
