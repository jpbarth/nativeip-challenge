import '../shared/config/env';

import { GetAllCities } from '../modules/city/services/GetAllCities';

const service = new GetAllCities();

it('Should have specified properties', async () => {
  const { data: cities } = await service.execute();

  cities.forEach(city => {
    expect(city).toHaveProperty('id');
    expect(city).toHaveProperty('name');
    expect(city).toHaveProperty('totalCustomers');
  });
});
