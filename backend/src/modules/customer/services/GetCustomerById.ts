import { AppError } from '../../../shared/utils/errors/AppError';

import { CustomerRepository } from '../infra/sequelize/repositories/CustomerRepository';

class GetCustomerById {
  constructor(private customerRepository = new CustomerRepository()) {}

  public async execute(customerId: number) {
    const customer = await this.customerRepository.getCustomerById(customerId);

    if (!customer) {
      throw new AppError('Customer not found', 404);
    }

    const result = {
      data: customer,
    };

    return result;
  }
}

export { GetCustomerById };
