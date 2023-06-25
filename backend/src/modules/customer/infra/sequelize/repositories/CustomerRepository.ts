import { AppError } from '../../../../../shared/utils/errors/AppError';

import { ICustomer } from '../../../../../types';

import { City } from '../../../../city/infra/sequelize/models/City';
import { Customer } from '../models/Customer';

class CustomerRepository {
  public async getCustomerById(
    customerId: number,
  ): Promise<ICustomer | undefined> {
    try {
      const customer = (await Customer.findByPk(customerId, {
        include: [
          {
            model: City,
            as: 'city',
            attributes: ['name'],
          },
        ],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      })) as any;

      if (!customer) {
        return undefined;
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
      };

      return result;
    } catch {
      throw new AppError('Error searching for customer');
    }
  }

  public async updateCustomer(
    customerId: number,
    fields: Partial<ICustomer>,
  ): Promise<boolean> {
    try {
      const [count] = await Customer.update(
        { ...fields },
        {
          where: {
            id: customerId,
          },
        },
      );

      const wasUpdated = count === 1;

      return wasUpdated;
    } catch {
      throw new AppError('Error updating customer');
    }
  }
}

export { CustomerRepository };
