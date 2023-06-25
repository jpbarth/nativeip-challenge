import '../shared/config/env';

import { AppError } from '../shared/utils/errors/AppError';

import { GetCustomerById } from '../modules/customer/services/GetCustomerById';

const service = new GetCustomerById();

it('Should find an existing customer', async () => {
  const selectedId = 1;

  const { data: customer } = await service.execute(selectedId);

  expect(customer.id).toBe(selectedId);
  expect(customer).toHaveProperty('first_name');
  expect(customer).toHaveProperty('last_name');
  expect(['Female', 'Male']).toContain(customer.gender);
  expect(customer).toHaveProperty('email');
  expect(customer).toHaveProperty('company');
  expect(customer).toHaveProperty('title');
});

it("Shouldn't find a non existing customer", async () => {
  await expect(async () => service.execute(1001)).rejects.toThrowError(
    AppError,
  );
});
