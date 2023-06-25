import { Sequelize } from "sequelize";

import { City } from "../models/City";
import { Customer } from "../../../../customer/infra/sequelize/models/Customer";

import { ICity, ICustomer, IPaging } from "../../../../../types";

interface IGetCityCustomersResult {
  page: number;
  pages: number;
  data: Partial<ICustomer>[]
}

class CityRepository {
  public async getAllCities(): Promise<ICity[]> {
    const cities = await City.findAll({
      attributes: [
        'id', 'name', [
          Sequelize.fn('COUNT', Sequelize.col('customers.id')),
          'total_customers'
        ]
      ],
      include: [{
        model: Customer,
        as: 'customers',
        attributes: []
      }],
      group: ['city.id']
    });

    const result = cities.map(city => {
      return {
        id: city.get('id'),
        name: city.get('name'),
        totalCustomers: city.get('total_customers'),
      }
    }) as ICity[];

    return result;
  }

  public async getCityCustomers(cityId: number, paging: IPaging): Promise<IGetCityCustomersResult> {
    const { page, limit } = paging;

    const customers = await Customer.findAndCountAll({
      attributes: ['id', 'first_name', 'last_name', 'email', 'company'],
      where: { cityId },
      limit: limit,
      offset: (page - 1) * limit
    });

    const result = {
      page: paging.page,
      pages: Math.ceil(customers.count / limit),
      data: customers.rows as unknown as ICustomer[]
    };

    return result;
  }
}

export { CityRepository }