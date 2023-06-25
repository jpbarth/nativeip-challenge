import express, { json } from 'express';
import { errors } from 'celebrate';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import 'express-async-errors';

import '../../config/env';

import { errorHandler } from './middlewares/errorHandler';

import { routes } from './routes';

const app = express();
const server = new http.Server(app);
const io = new Server(server);

app.use(json());
app.use(cors());

app.use(routes);

app.use(errors());
app.use(errorHandler);

server.listen(process.env.SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`App listening to port ${process.env.SERVER_PORT}`);
});

export { io };
