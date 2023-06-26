import { Socket } from "socket.io-client";
import { useQueryCities } from "../../services/useQueryCities";

interface CitiesProps {
  io: Socket;
  setCity: any;
}

function Cities({ io, setCity }: CitiesProps) {
  const { data, refetch } = useQueryCities();

  io.on("customer-updated", refetch);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = data?.find(
      (city) => city.id === parseInt(e.target.value, 10)
    );

    setCity(selectedCity);
  };

  const cities = data?.map((city) => {
    return (
      <option key={city.id} value={city.id}>
        {city.name} ({city.totalCustomers}{" "}
        {city.totalCustomers === 1 ? "customer" : "customers"})
      </option>
    );
  });

  return (
    <select onChange={handleChange}>
      <option value={0}>Select a city</option>
      {cities}
    </select>
  );
}

export { Cities };
