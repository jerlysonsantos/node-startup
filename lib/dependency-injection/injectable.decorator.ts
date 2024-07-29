import { container } from './container';

export function Injectable(token: string) {
  return function (target: any) {
    container.register(token, target);
  };
}
