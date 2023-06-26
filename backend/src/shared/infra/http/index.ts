import express, { json } from 'express';
import { errors } from 'celebrate';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import swaggerUi from 'swagger-ui-express';

import 'express-async-errors';

import '../../config/env';

import { errorHandler } from './middlewares/errorHandler';

import { routes } from './routes';
import { ensureAuthentication } from './middlewares/ensureAuthentication';

import { swaggerDocument } from '../../../docs';

const app = express();
const server = new http.Server(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(json());
app.use(cors());

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: { url: '/swagger.json' },
  }),
);

app.use(ensureAuthentication);
app.use(routes);

app.use(errors());
app.use(errorHandler);

server.listen(process.env.SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`App listening to port ${process.env.SERVER_PORT}`);
});

export { io };
