import "../css/House.css";
import { NumericFormat } from "react-number-format";
import house1 from "../images/house1.jpg";
import house2 from "../images/house2.jpg";
import house3 from "../images/house3.jpg";
import house4 from "../images/house4.jpg";
import { useContext /* createContext */ } from "react";
import { HousesContext } from "../pages/Home";
import { useLocation } from "react-router-dom";
import RemoveHouse from "./RemoveHouse";
import UpdateButton from "./UpdateButton";

const min = 1;
const max = 4;
const image = Math.round(min + Math.random() * (max - min));
const choseImage = () => {
  switch (image) {
    case 1:
      return house1;
    case 2:
      return house2;
    case 3:
      return house3;
    case 4:
      return house4;
  }
};

/* const imageContext = createContext<{
  image: number;
}>({
  image: 0,
}); */
const House = () => {
  const housesCont = useContext(HousesContext);
  const url = useLocation();
  const parameter = "";
  const id = Number(
    new URLSearchParams(url.search).get("id")?.toString() || parameter
  );

  const house = housesCont.houses.find((h) => h.id === id);
  return (
    <div className="row">
      <div className="col-sm-5 mt-10 houseImg">
        <img
          src={choseImage()}
          alt="House not found"
          className="HouseImage"
        ></img>
      </div>
      <div className="col-sm-6 mt-20 content">
        <div className="row mt-5">
          <h2 className="headers">Description of the house</h2>
          <p className="text">
            {house ? house.description : "Description not found"}
          </p>
        </div>
        <div className="row">
          <h2 className="headers">Price</h2>
          <p className="text">
            <NumericFormat
              value={house ? house.price.toFixed(2) : 0}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </p>
        </div>
        <div className="row mt-5 ">
          <div className="col">
            <RemoveHouse />
          </div>
          <div className="col ml-5">
            <UpdateButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
