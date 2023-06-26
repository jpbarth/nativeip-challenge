import { Sequelize } from 'sequelize';

import { City } from '../models/City';
import { Customer } from '../../../../customer/infra/sequelize/models/Customer';

import { ICity, ICustomer, IPaging } from '../../../../../types';
import { AppError } from '../../../../../shared/utils/errors/AppError';

interface IGetCityCustomersResult {
  page: number;
  pages: number;
  data: Partial<ICustomer>[];
}

class CityRepository {
  public async getAllCities(): Promise<ICity[]> {
    try {
      const cities = await City.findAll({
        attributes: [
          'id',
          'name',
          [
            Sequelize.fn('COUNT', Sequelize.col('customers.id')),
            'total_customers',
          ],
        ],
        include: [
          {
            model: Customer,
            as: 'customers',
            attributes: [],
          },
        ],
        group: ['city.id'],
      });

      const result = cities.map(city => {
        return {
          id: city.get('id'),
          name: city.get('name'),
          totalCustomers: city.get('total_customers'),
        };
      }) as ICity[];

      return result;
    } catch {
      throw new AppError('Error searching for cities');
    }
  }

  public async getCityCustomers(
    cityId: number,
    paging: IPaging,
  ): Promise<IGetCityCustomersResult> {
    try {
      const { page, limit } = paging;

      const city = await City.findByPk(cityId);

      if (!city) {
        throw new AppError('City not found', 404);
      }

      const customers = await Customer.findAndCountAll({
        attributes: ['id', 'first_name', 'last_name', 'email', 'company'],
        where: { cityId },
        limit,
        offset: (page - 1) * limit,
      });

      const totalPages = Math.ceil(customers.count / limit);
      const currentPage = Math.min(paging.page, totalPages);

      const result = {
        page: currentPage,
        pages: totalPages,
        data: customers.rows as unknown as ICustomer[],
      };

      return result;
    } catch (e) {
      if (e instanceof AppError) {
        throw e;
      }

      throw new AppError("Error searching for city's customers");
    }
  }
}

export { CityRepository };
