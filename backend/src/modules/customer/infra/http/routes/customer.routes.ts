import { Router } from "express";

import { CustomerController } from "../controllers/CustomerController";

const customerRouter = Router();
const customerController = new CustomerController();

customerRouter.get('/:customerId', customerController.getCustomerById);

customerRouter.put('/:customerId', customerController.updateCustomer);

export { customerRouter }
