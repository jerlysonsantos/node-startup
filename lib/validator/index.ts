import { Request, Response, NextFunction } from 'express';
import { ValidationError, validate } from 'class-validator';

const validationErroHandling = (errors: ValidationError[]) => {
  return errors.map((error) => {
    return {
      [error.property]: error.constraints,
    };
  });
};

export const ValidateBody = (dtoClass: new () => any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const validationDtoClass = new dtoClass();

    Object.keys(body).forEach((itemKey) => {
      validationDtoClass[itemKey] = body[itemKey];
    });

    validate(validationDtoClass).then((errors) => {
      if (errors.length > 0) {
        return res.status(400).json({ errors: validationErroHandling(errors) });
      } else {
        req.body = validationDtoClass;
        next();
      }
    });
  };
};
