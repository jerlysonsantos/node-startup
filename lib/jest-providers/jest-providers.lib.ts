import { container, IContainerProvider } from '../dependency-injection/container';

class TestProviders {
  providers(repositories: IContainerProvider[]) {
    repositories.forEach((repository) => {
      container.provide(repository);
    });
  }
}

export default new TestProviders();
