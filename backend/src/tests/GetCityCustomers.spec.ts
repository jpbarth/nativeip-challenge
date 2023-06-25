import '../shared/config/env';

import { GetCityCustomers } from '../modules/city/services/GetCityCustomers';

const service = new GetCityCustomers();

it('Should find customers of existing city', async () => {
  const customers = await service.execute(1, { page: 1, limit: 10 });

  expect(customers.page).toBeLessThanOrEqual(customers.pages);
  customers.data.forEach(customer => {
    expect(customer).toHaveProperty('id');
    expect(customer).toHaveProperty('first_name');
    expect(customer).toHaveProperty('last_name');
    expect(customer).toHaveProperty('email');
    expect(customer).toHaveProperty('company');
  });
});
