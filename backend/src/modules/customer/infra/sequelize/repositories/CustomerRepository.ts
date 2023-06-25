import { ICustomer } from "../../../../../types";

import { City } from "../../../../city/infra/sequelize/models/City";
import { Customer } from "../../../../customer/infra/sequelize/models/Customer";

class CustomerRepository {
  public async getCustomerById(customerId: number) {
    const customer = await Customer.findByPk(customerId, {
      include: [{
        model: City,
        as: 'city',
        attributes: ['name']
      }]
    }) as any;

    if (!customer) {
      throw new Error();
    }

    const result = {
      id: customer.get('id'),
      first_name: customer.get('first_name'),
      last_name: customer.get('last_name'),
      email: customer.get('email'),
      gender: customer.get('gender'),
      title: customer.get('title'),
      company: customer.get('company'),
      city: customer.city.get('name'),
    }

    return result;
  }

  public async updateCustomer(customerId: number, fields: Partial<ICustomer>): Promise<boolean> {
    const [count] = await Customer.update({ ...fields }, {
      where: {
        id: customerId
      },
    });

    const wasUpdated = count === 1;

    return wasUpdated;
  }
}

export { CustomerRepository }
