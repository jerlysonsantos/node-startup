import { container } from '@injection-dependency';
import { NewGenericUseCase, INewGenericUseCase } from './@core/usecases/NewGenericUseCase';
import { IGenericRepository } from './@core/repository/IGenericRepository';
import { GenericRepository } from './@infra/repository/GenericRepository';

container.register<INewGenericUseCase>('INewGenericUseCase', NewGenericUseCase);
container.register<IGenericRepository>('IGenericRepository', GenericRepository);