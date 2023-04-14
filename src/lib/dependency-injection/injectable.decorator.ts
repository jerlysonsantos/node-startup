import { container } from "./container";

export function Injectable(token: string): Function {
  return function (target: { new () }): void {
    container.providers[token] = new target();
  };
}
