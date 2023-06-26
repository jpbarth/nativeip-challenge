import { Link, useParams } from "react-router-dom";
import { useQueryCustomer } from "../../services/useQueryCustomer";

import * as S from "./styles";

import { CustomerForm } from "../../components/CustomerForm";

function Customer() {
  const { customerId } = useParams();

  const { data } = useQueryCustomer(`${customerId}`);

  return (
    <S.Container>
      <S.Content>
        <Link to="/">Dashboard</Link>
        <S.Title>Editing Customer {data?.first_name}</S.Title>
        {data ? <CustomerForm customer={data} /> : null}
      </S.Content>
    </S.Container>
  );
}

export { Customer };
