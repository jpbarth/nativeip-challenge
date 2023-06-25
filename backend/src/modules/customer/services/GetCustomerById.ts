import { CustomerRepository } from "../infra/sequelize/repositories/CustomerRepository";

class GetCustomerById {
  constructor(private customerRepository = new CustomerRepository()) { }

  public async execute(customerId: number) {
    const customer = await this.customerRepository.getCustomerById(customerId);

    const result = {
      data: customer,
    }

    return result;
  }
}

export { GetCustomerById }
