export interface ICity {
  id: number;
  name: string;
  totalCustomers?: number;
}

export interface ICustomer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: 'Female' | 'Male';
  company: string;
  city: string;
  title: string;
}

export interface IPaging {
  page: number;
  limit: number;
}