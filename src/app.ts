import express, { Handler } from 'express';
import { IRouter } from '@routers';
import { MetadataKeys } from './lib/routers/utils/metadata.keys';

class App {
  public app: express.Application;
  public port: number;

  constructor(appInit: { port: number; middleWares: any[]; controllers: any[] }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
  }

  private middlewares(middleWares: any[]) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: any[]) {
    try {
      controllers.forEach((controller) => {
        const controllerInstance: { [handleName: string]: Handler } = new controller() as any;

        const basePath: string = Reflect.getMetadata(MetadataKeys.BASE_PATH, controller);

        const routers: IRouter[] = Reflect.getMetadata(MetadataKeys.ROUTERS, controller);

        if (!routers) {
          throw new Error(`Controller ${controllerInstance.__proto__.constructor.name} no have routers`);
        }

        const router = express.Router();

        routers.forEach(({ method, path, handlerName, middlewares = [] }) => {
          router[method](path, ...middlewares, controllerInstance[String(handlerName)].bind(controllerInstance));
        });

        this.app.use(basePath, router);
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App;
