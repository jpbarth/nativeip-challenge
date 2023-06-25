import { CityRepository } from "../infra/sequelize/repositories/CityRepository";

class GetAllCities {
  constructor(private citiesRepository = new CityRepository()) { }

  public async execute() {
    const cities = await this.citiesRepository.getAllCities();

    return cities;
  }
}

export { GetAllCities }