export interface IContainerProvider {
  useValue: any;
  token: string;
}

export class Container {
  providers: { [key: string]: any } = {};
  public resolve(token: string) {
    const matchedProvider = Object.keys(this.providers).find(
      (key: string) => key === token
    );

    if (matchedProvider) {
      return this.providers[matchedProvider];
    } else {
      throw new Error(`No provider found for ${token}!`);
    }
  }

  public provide(details: IContainerProvider): void {
    this.providers[details.token] = details.useValue;
  }
}

export const container = new Container();
