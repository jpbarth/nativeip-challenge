import { AppError } from '../../../shared/utils/errors/AppError';

import { ICustomer } from '../../../types';

import { CustomerRepository } from '../infra/sequelize/repositories/CustomerRepository';

import { io } from '../../../shared/infra/http';

class UpdateCustomer {
  constructor(private customerRepository = new CustomerRepository()) {}

  public async execute(customerId: number, fields: Partial<ICustomer>) {
    const wasUpdated = await this.customerRepository.updateCustomer(
      customerId,
      fields,
    );

    if (!wasUpdated) {
      throw new AppError('Customer not found', 404);
    }

    const customer = await this.customerRepository.getCustomerById(customerId);

    io.emit('customer-updated');

    const result = {
      data: customer,
    };

    return result;
  }
}

export { UpdateCustomer };
