import { IPaging } from '../../../types';

import { CityRepository } from '../infra/sequelize/repositories/CityRepository';

class GetCityCustomers {
  constructor(private citiesRepository = new CityRepository()) {}

  public async execute(cityId: number, paging: IPaging) {
    const page = Number.isNaN(paging.page) || paging.page < 1 ? 1 : paging.page;
    const limit =
      Number.isNaN(paging.limit) || paging.limit < 0 ? 10 : paging.limit;

    const customers = await this.citiesRepository.getCityCustomers(cityId, {
      page,
      limit,
    });

    return customers;
  }
}

export { GetCityCustomers };
