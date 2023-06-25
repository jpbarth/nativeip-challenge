import { Router } from 'express';

import { cityRouter } from '../../../../modules/city/infra/http/routes/city.routes';
import { customerRouter } from '../../../../modules/customer/infra/http/routes/customer.routes';

const routes = Router();

routes.use('/city', cityRouter);
routes.use('/customer', customerRouter);

export { routes };
