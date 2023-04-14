import 'reflect-metadata';
import 'module-alias/register';

import bodyParser from 'body-parser';
import App from './app';
import { GenericController } from './modules/generic/generic.controller';

const app = new App({
  port: 3000,
  controllers: [GenericController],
  middleWares: [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
});

app.listen();
