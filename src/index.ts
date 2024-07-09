import 'reflect-metadata';
import 'module-alias/register';

import bodyParser from 'body-parser';
import { Startup } from './startup';
import { GenericController } from './@infra/controllers/GenericController';

const app = new Startup({
  port: 3000,
  controllers: [GenericController],
  middleWares: [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
});

app.run();
