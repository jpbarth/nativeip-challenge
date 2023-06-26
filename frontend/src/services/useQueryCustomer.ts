import { useQuery } from "@tanstack/react-query";

import { ICustomer } from "../types";

import { CustomersAPI } from "../utils/CustomersAPI";

interface IResponse {
  data: ICustomer;
}

function useQueryCustomer(customerId: string) {
  async function getCustomer() {
    const { data: response } = await CustomersAPI.get<IResponse>(
      `/customer/${customerId}`
    );

    if (!response.data) {
      return undefined;
    }

    const customer = response.data;

    return customer;
  }

  return useQuery(["customer", customerId], getCustomer, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}

export { useQueryCustomer };
