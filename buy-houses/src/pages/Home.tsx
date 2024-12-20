import Banner from "../components/Banner";
import HouseList from "../components/HouseList";
import React, { useState, createContext } from "react";

interface House {
  id: number;
  address: string;
  owner: string;
  price: number;
  description: string;
}
const data = [
  {
    id: 1,
    address: "Via Giuseppe Frua 39F",
    owner: "Sciacca Claudio",
    price: 95000,
    description: "Home with garden",
  },
  {
    id: 2,
    address: "Via San Bernardino 27",
    owner: "Bana Maria Grazia",
    price: 137000,
    description: "House with pool",
  },
];

const HousesContext = createContext<{
  houses: House[];
}>({
  houses: data,
});
const Home = () => {
  const [houses] = useState<House[]>(data);
  const HousesContext = createContext<{
    houses: House[];
  }>({
    houses: data,
  });
  return (
    <div>
      <HousesContext.Provider value={{ houses }}>
        <Banner text="House sales agency"></Banner>
        <HouseList></HouseList>
      </HousesContext.Provider>
    </div>
  );
};

export default Home;
export { HousesContext };
