interface ICity {
  id: number;
  name: string;
  totalCustomers: number;
}

interface ICityCustomer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
}

interface ICustomer {
  id: number;
  cityId: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  title: string;
  company: string;
  city: string;
}

export type { ICity, ICityCustomer, ICustomer };
