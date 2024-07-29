import { MetadataKeys } from './utils/metadata.keys';

const Controller = (basePath: string): ClassDecorator => {
  return (target) => {
    const slashBasePath = basePath.startsWith('/') ? basePath : `/${basePath}`;

    Reflect.defineMetadata(MetadataKeys.BASE_PATH, slashBasePath, target);
  };
};
export { Controller };
