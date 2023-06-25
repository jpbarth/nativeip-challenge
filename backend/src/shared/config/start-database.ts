import { database } from './database';

import { City } from '../../modules/city/infra/sequelize/models/City';
import { Customer } from '../../modules/customer/infra/sequelize/models/Customer';

import { cities } from '../files/cities';
import { customers } from '../files/customers';

import { ICity, ICustomer } from '../../types';

async function createCities(cities: ICity[]) {
  await Promise.all(cities.map(city => City.findCreateFind({ where: { id: city.id }, defaults: { ...city } })));
}

async function createCustomers(customers: ICustomer[]) {
  await Promise.all(customers.map(async customer => {
    const city = await City.findOne({ where: { name: customer.city } }) as unknown as ICity;

    const customerData = {
      id: customer.id,
      cityId: city.id,
      first_name: customer.first_name,
      last_name: customer.last_name,
      email: customer.email,
      gender: customer.gender,
      company: customer.company,
      title: customer.title,
    }

    await Customer.findOrCreate({ where: { id: customer.id }, defaults: customerData });
  }));
}

async function initializeDatabase() {
  await City.sync();
  await Customer.sync();

  await createCities(cities);
  await createCustomers(customers);
}

export { initializeDatabase }