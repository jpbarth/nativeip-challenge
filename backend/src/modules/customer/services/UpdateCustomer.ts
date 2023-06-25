import { ICustomer } from "../../../types";

import { CustomerRepository } from "../infra/sequelize/repositories/CustomerRepository";

class UpdateCustomer {
  constructor(private customerRepository = new CustomerRepository()) { }

  public async execute(customerId: number, fields: Partial<ICustomer>) {
    const wasUpdated = await this.customerRepository.updateCustomer(customerId, fields);

    if (!wasUpdated) {
      throw Error;
    }

    const customer = await this.customerRepository.getCustomerById(customerId);

    const result = {
      data: customer,
    }

    return result;
  }
}

export { UpdateCustomer }
