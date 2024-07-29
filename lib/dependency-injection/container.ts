export interface IContainerProvider {
  useValue: any;
  token: string;
}

type SymbolObject<T extends object = Record<any, any>, K = T[keyof T]> = {
  [key: string | number | symbol]: K;
};

export class Container {
  providers: SymbolObject = {};

  public resolve(token: string) {
    const symbol = Symbol.for(token);

    return this.providers[symbol];
  }

  public register<T>(interfaceName: string, implementation: T): void {
    const symbol = Symbol.for(interfaceName);

    this.providers = {
      ...this.providers,
      [symbol]: implementation,
    };
  }

  public provide(details: IContainerProvider): void {
    const symbol = Symbol.for(details.token);

    this.providers[symbol] = details.useValue;
  }
}

export const container = new Container();
