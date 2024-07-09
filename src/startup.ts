import express, { Handler } from 'express';
import { IRouter } from 'lib/routers';
import { MetadataKeys } from '../lib/routers/utils/metadata.keys';

class Startup {
  public app: express.Application;
  public port: number;

  constructor(appInit: { port: number; middleWares: any[]; controllers: any[] }) {
    this.app = express();
    this.port = appInit.port;

    this.registryDi();

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
      console.log('Registry routes');

      controllers.forEach((controller) => {
        const controllerInstance: { [handleName: string]: Handler } = new controller() as any;

        const basePath: string = Reflect.getMetadata(MetadataKeys.BASE_PATH, controller);

        const routers: IRouter[] = Reflect.getMetadata(MetadataKeys.ROUTERS, controller);

        if (!routers) {
          throw new Error(`Controller ${controllerInstance.__proto__.constructor.name} no have routers`);
        }

        const router = express.Router();

        routers.forEach(({ method, path, handlerName, middlewares = [] }) => {
          console.log(`${method.toUpperCase()} ${basePath}${path} -> ${String(handlerName)}`);
          router[method](path, ...middlewares, controllerInstance[String(handlerName)].bind(controllerInstance));
        });

        this.app.use(basePath, router);
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  private registryDi() {}

  public run() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export { Startup };
