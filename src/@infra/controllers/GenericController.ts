import { Controller, Get } from 'lib/routers';

@Controller('/generic')
export class GenericController {
  @Get('/')
  async generic(req: any, res: any) {
    res.send('Hello World');
  }
}
