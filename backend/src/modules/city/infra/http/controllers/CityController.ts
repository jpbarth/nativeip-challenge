import { Request, Response } from "express";

import { GetAllCities } from "../../../services/GetAllCities";
import { GetCityCustomers } from "../../../services/GetCityCustomers";

class CityController {
  public async getAllCities(request: Request, response: Response): Promise<Response> {
    const service = new GetAllCities();
    const result = await service.execute();

    return response.json({ data: result });
  }

  public async getCityCustomers(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.cityId);
    const page = Number(request.query.page);
    const limit = Number(request.query.limit);

    const service = new GetCityCustomers();
    const result = await service.execute(id, { page, limit });

    return response.json({ data: result });
  }
}

export { CityController }