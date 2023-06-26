/* eslint-disable no-alert */
import { useMutation } from "@tanstack/react-query";

import { CustomersAPI } from "../utils/CustomersAPI";

interface ICustomerFields {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  title: string;
  company: string;
  cityId: number;
}

interface MutationProps {
  customerId: string;
  data: ICustomerFields;
}

function useMutationCustomer() {
  async function updateCustomer(customerId: string, data: ICustomerFields) {
    await CustomersAPI.put(`/customer/${customerId}`, data);
  }

  return useMutation(
    ({ customerId, data }: MutationProps) => updateCustomer(customerId, data),
    {
      onSuccess: () => alert("Customer updated"),
      onError: () => alert("Error updating customer"),
    }
  );
}

export { useMutationCustomer };
