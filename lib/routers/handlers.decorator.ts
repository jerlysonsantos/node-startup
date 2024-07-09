import { MetadataKeys } from './utils/metadata.keys';

export enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

export interface IRouter {
  method: Methods;
  path: string;
  handlerName: string | symbol;
  middlewares: any;
}

const methodDecoratorFactory = (method: Methods) => {
  return (path: string, ...middlewares: any): MethodDecorator => {
    return (target, propertyKey) => {
      const controllerClass = target.constructor;
      const routers: IRouter[] = Reflect.hasMetadata(MetadataKeys.ROUTERS, controllerClass)
        ? Reflect.getMetadata(MetadataKeys.ROUTERS, controllerClass)
        : [];

      const slashPath = path.startsWith('/') ? path : `/${path}`;

      routers.push({
        method,
        path: slashPath,
        handlerName: propertyKey,
        middlewares,
      });

      Reflect.defineMetadata(MetadataKeys.ROUTERS, routers, controllerClass);
    };
  };
};

export const Get = methodDecoratorFactory(Methods.GET);
export const Post = methodDecoratorFactory(Methods.POST);
export const Put = methodDecoratorFactory(Methods.PUT);
export const Patch = methodDecoratorFactory(Methods.PATCH);
export const Delete = methodDecoratorFactory(Methods.DELETE);
