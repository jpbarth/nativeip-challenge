import { useState } from "react";

import { ICity } from "../../types";

import { socketConnection } from "../../utils/socketConnection";

import { Cities } from "../../components/Cities";
import { CustomersList } from "../../components/CustomersList";

import * as S from "./styles";

function Dashboard() {
  const socket = socketConnection();
  const [city, setCity] = useState<ICity>();

  return (
    <S.Container>
      <S.Content>
        <S.Title>Customers Dashboard</S.Title>
        <Cities io={socket} setCity={setCity} />
        <S.Caption>
          {city ? `Customers from ${city.name}` : "Select a city"}
        </S.Caption>
        {city ? <CustomersList io={socket} cityId={city.id} /> : null}
      </S.Content>
    </S.Container>
  );
}

export { Dashboard };
