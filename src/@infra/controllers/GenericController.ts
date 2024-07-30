import { Inject } from '@injection-dependency';
import { Controller, Get, Post } from 'lib/routers';
import { ValidateBody } from 'lib/validator';
import { INewGenericUseCase } from 'src/@core/usecases/NewGenericUseCase';
import { GenericDTO } from '../dtos/GenericDTO';
import { Request, Response } from 'express';

@Controller('/generic')
export class GenericController {
  @Inject('INewGenericUseCase')
  private newGenericUseCase: INewGenericUseCase;

  @Post('/', ValidateBody(GenericDTO))
  async createGeneric(req: Request<{}, any, GenericDTO>, res: Response) {
    this.newGenericUseCase.execute(req.body);

    return res.status(201).send({ message: 'Generic created' });
  }
}
