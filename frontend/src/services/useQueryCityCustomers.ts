import { useQuery } from "@tanstack/react-query";

import { ICityCustomer } from "../types";

import { CustomersAPI } from "../utils/CustomersAPI";

interface IResponse {
  pages: number;
  page: number;
  data: Partial<ICityCustomer>[];
}

function useQueryCustomers(cityId: number, page?: number, limit?: number) {
  async function fetchCustomersPage() {
    const { data: response } = await CustomersAPI.get<IResponse>(
      `/city/${cityId}/customers`,
      {
        params: {
          page,
          limit,
        },
      }
    );

    return response;
  }

  return useQuery(["customers", cityId, page, limit], fetchCustomersPage);
}

export { useQueryCustomers };
