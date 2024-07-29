import { Generic } from '../entity/Generic';

export { IGenericRepository };

interface IGenericRepository {
  getById(id: number): Promise<Generic>;
  getAll(): Promise<Generic[]>;
  create(entity: Generic): void;
  update(entity: Generic): void;
  delete(id: number): void;
}
