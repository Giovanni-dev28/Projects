import "../css/HouseInfoUpdate.css";
import { NumericFormat } from "react-number-format";
import house1 from "../images/house1.jpg";
import house2 from "../images/house2.jpg";
import house3 from "../images/house3.jpg";
import house4 from "../images/house4.jpg";
import { useContext } from "react";
import { HousesContext } from "../pages/Home";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

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

const HouseInfoUpdate = () => {
  const navigate = useNavigate();
  const housesCont = useContext(HousesContext);
  const url = useLocation();
  const parameter = "";
  const id = Number(
    new URLSearchParams(url.search).get("id")?.toString() || parameter
  );

  const house = housesCont.houses.find((h) => h.id === id);

  const [description, setDescription] = useState(house?.description);
  const [price, setPrice] = useState(house?.price);

  const ReturnToSelectedHome = () => {
    const link = `/selectedHouse/view?id=${id}`;
    navigate(link);
  };

  const UpdateHouse = async (event: any) => {
    event.preventDefault();
    const houseToUpdate = housesCont.houses.find((h) => h.id === id);
    houseToUpdate && (houseToUpdate.description = description ?? "");
    houseToUpdate && (houseToUpdate.price = price ?? 0);
    ReturnToSelectedHome();
  };

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
          <p className="text">{description}</p>
        </div>
        <div className="row">
          <h2 className="headers">Price</h2>
          <p className="text">
            <NumericFormat
              value={price?.toFixed(2)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </p>
        </div>
        <div className="row mt-2"></div>
        <form onSubmit={UpdateHouse}>
          <div className="col-sm-8 mt-5">
            <label className="labelForms"> Description </label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></input>
            <label className="labelForms" style={{ marginLeft: "20px" }}>
              Price
            </label>
            <input
              type="number"
              onChange={(e) => setPrice(parseInt(e.target.value))}
              value={price}
              min={1000}
            ></input>
          </div>
          <div className="row mt-3">
            <input
              type="submit"
              value="Update"
              className="but col-sm-3 "
            ></input>
            <button
              className="col-sm-3"
              name="Cancel"
              onClick={() => ReturnToSelectedHome}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HouseInfoUpdate;
