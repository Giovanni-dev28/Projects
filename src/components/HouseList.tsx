import React, { useState } from "react";
import "../css/HouseListCss.css";
import HouseRowMemo from "./HouseRow";
//import HouseRow from "./HouseRow";
import Adding from "./Adding";
import AddHouse from "./AddHouse";

interface HouseListProps {
  selectedHouse: Function;
  setAddingHouse: Function;
  addingHouse: boolean;
}
const HouseList: React.FC<HouseListProps> = ({
  selectedHouse,
  setAddingHouse,
  addingHouse,
}) => {
  const data = [
    {
      id: 1,
      address: "Via Giuseppe Frua 39F",
      owner: "Sciacca Claudio",
      price: 95000,
      image:
        "https://www.tecnoedil.org/wp-content/uploads/2022/03/tecnoedil-avezzano-case-in-legno-mobile.jpg",
      description: "Home with garden",
    },
    {
      id: 2,
      address: "Via San Bernardino 27",
      owner: "Bana Maria Grazia",
      price: 137000,
      image: "https://veronicapatta.com/wp-content/uploads/2023/03/4.webp",
      description: "House with pool",
    },
  ];
  const [houses, setHouses] = useState(data);
  console.log(houses);
  return (
    <>
      {!addingHouse ? (
        <div className="row mt-3 container">
          <table>
            <thead>
              <tr>
                <th className="tableHeader">Address</th>
                <th className="tableHeader">Owner</th>
                <th className="tableHeader">Cost of the house</th>
              </tr>
            </thead>
            <tbody>
              {houses.map((h) => {
                return (
                  <HouseRowMemo
                    key={h.id}
                    house={h}
                    selectedHouse={selectedHouse}
                  />
                );
              })}
            </tbody>
          </table>
          <Adding setAdding={setAddingHouse} />
        </div>
      ) : (
        <AddHouse
          setHouses={setHouses}
          houses={houses}
          setAddingHouse={setAddingHouse}
        />
      )}
    </>
  );
};
export default HouseList;
