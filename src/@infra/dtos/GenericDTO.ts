import { IsNumber } from 'class-validator';

export class GenericDTO {
  @IsNumber()
  id: number;

  toJson() {
    return {
      id: this.id,
    };
  }
}
