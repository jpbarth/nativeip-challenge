import express, { json } from 'express';
import cors from 'cors';

import 'express-async-errors';

import '../../config/env';
import '../../config/database';

import { routes } from './routes';

import { initializeDatabase } from '../../config/start-database';

const app = express();

app.use(json());
app.use(cors());

app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
  console.info(`App listening to port ${process.env.SERVER_PORT}`);
  //initializeDatabase();
});