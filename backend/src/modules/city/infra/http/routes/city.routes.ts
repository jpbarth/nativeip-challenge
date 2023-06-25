import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CityController } from '../controllers/CityController';

const cityRouter = Router();
const cityController = new CityController();

cityRouter.get('/', cityController.getAllCities);

cityRouter.get(
  '/:cityId/customers',
  celebrate({
    [Segments.PARAMS]: {
      cityId: Joi.number().integer().min(1).required(),
    },
    [Segments.QUERY]: {
      page: Joi.number().integer().min(1),
      limit: Joi.number().integer().min(1),
    },
  }),
  cityController.getCityCustomers,
);

export { cityRouter };
