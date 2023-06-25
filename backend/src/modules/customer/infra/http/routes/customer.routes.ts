import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CustomerController } from '../controllers/CustomerController';

const customerRouter = Router();
const customerController = new CustomerController();

customerRouter.get(
  '/:customerId',
  celebrate({
    [Segments.PARAMS]: {
      customerId: Joi.number().integer().min(1).required(),
    },
  }),
  customerController.getCustomerById,
);

customerRouter.put(
  '/:customerId',
  celebrate({
    [Segments.PARAMS]: {
      customerId: Joi.number().integer().min(1).required(),
    },
    [Segments.BODY]: {
      first_name: Joi.string(),
      last_name: Joi.string(),
      email: Joi.string(),
      gender: Joi.string().valid('Female', 'Male'),
      title: Joi.string(),
      company: Joi.string(),
      cityId: Joi.number(),
    },
  }),
  customerController.updateCustomer,
);

export { customerRouter };
