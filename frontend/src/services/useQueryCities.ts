import { useQuery } from "@tanstack/react-query";

import { ICity } from "../types";

import { CustomersAPI } from "../utils/CustomersAPI";

interface IResponse {
  data: ICity[];
}

async function getCities(): Promise<ICity[] | undefined> {
  const { data: response } = await CustomersAPI.get<IResponse>("/city");

  if (!response.data) {
    return undefined;
  }

  const cities = response.data;

  return cities;
}

function useQueryCities() {
  return useQuery(["cities"], getCities);
}

export { useQueryCities };
