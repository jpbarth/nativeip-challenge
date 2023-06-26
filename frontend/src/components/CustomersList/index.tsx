import { Socket } from "socket.io-client";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useQueryCustomers } from "../../services/useQueryCityCustomers";
import { Table } from "../Table";

interface CustomersListProps {
  io: Socket;
  cityId: number;
}

function CustomersList({ io, cityId }: CustomersListProps) {
  const [selectedPage, setSelectedPage] = useState(1);

  const { data, refetch, isLoading } = useQueryCustomers(cityId, selectedPage);

  io.on("customer-updated", refetch);

  const totalPages = data?.pages ?? 1;

  const tableData =
    data?.data?.map((customer) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>
            {customer.first_name} {customer.last_name}
          </td>
          <td>{customer.email}</td>
          <td>{customer.company}</td>
          <td>
            <Link to={`/edit/${customer.id}`}>Edit</Link>
          </td>
        </tr>
      );
    }) ?? null;

  const tableInfo = (
    <tr>
      <td colSpan={5}>Loading...</td>
    </tr>
  );

  return (
    <>
      <Table
        totalPages={totalPages}
        selectedPage={selectedPage}
        setPage={setSelectedPage}
        columns={["ID", "Name", "E-mail", "Company", "Actions"]}
        content={isLoading ? tableInfo : tableData}
      />
    </>
  );
}

export { CustomersList };
