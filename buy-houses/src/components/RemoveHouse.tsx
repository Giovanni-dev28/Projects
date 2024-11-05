import { useLocation, useNavigate } from "react-router-dom";
import { HousesContext } from "../pages/Home";
import { useContext } from "react";
import "../css/RemoveHouse.css";

interface House {
  id: number;
  address: string;
  owner: string;
  price: number;
  description: string;
}

const RemoveHouse = () => {
  const url = useLocation();
  const parameter = "";
  const id = Number(
    new URLSearchParams(url.search).get("id")?.toString() || parameter
  );
  const houseCont = useContext(HousesContext);
  const navigate = useNavigate();
  const link = "/";
  const removeHouse = () => {
    houseCont.houses = newHousesArray();
    navigate(link);
  };
  //TODO: see a better way to do newHousesArray
  const newHousesArray = () => {
    let newArray: Array<House> = [];
    houseCont.houses.forEach((house) => {
      if (!(house.id === id)) newArray.push(house);
    });
    return newArray;
  };
  return (
    <div>
      <button onClick={removeHouse} className="deleteHouse">
        Remove the House
      </button>
    </div>
  );
};

export default RemoveHouse;
