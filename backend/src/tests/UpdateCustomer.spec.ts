import '../shared/config/env';

import { AppError } from '../shared/utils/errors/AppError';

import { UpdateCustomer } from '../modules/customer/services/UpdateCustomer';

const service = new UpdateCustomer();

it('Should update customer data', async () => {
  const selectedId = 1;

  const newData = {
    last_name: 'Wilson',
  };

  const { data: updatedCustomer } = await service.execute(selectedId, newData);

  expect(updatedCustomer?.last_name).toBe(newData.last_name);
});

it("Shouldn't update a non existing customer", async () => {
  const newData = {
    first_name: 'Robert',
    last_name: 'Singer',
  };

  await expect(async () =>
    service.execute(19500812, newData),
  ).rejects.toThrowError(AppError);
});
