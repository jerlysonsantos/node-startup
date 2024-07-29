import { Inject } from '@injection-dependency';
import { Controller, Get } from 'lib/routers';
import { INewGenericUseCase } from 'src/@core/usecases/NewGenericUseCase';

@Controller('/generic')
export class GenericController {
  @Inject('NewGenericUseCase')
  private newGenericUseCase: INewGenericUseCase;

  @Get('/')
  async generic(req: any, res: any) {
    this.newGenericUseCase.execute();
    res.send('Hello World');
  }
}
