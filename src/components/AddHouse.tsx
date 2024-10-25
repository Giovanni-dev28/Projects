import { useContext, useState } from "react";
import "../css/AddHouseCss.css";
import { HousesContext } from "../pages/Home";
import { useNavigate } from "react-router-dom";

const AddHouse = () => {
  const [address, setAddress] = useState("");
  const [owner, setOwner] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const housesCont = useContext(HousesContext);
  const addNewHouse = () => {
    const newHouse = {
      id: housesCont.houses.length + 1,
      address: address,
      owner: owner,
      price: price,
      image: image,
      description: description,
    };
    housesCont.setHouses([...housesCont.houses, newHouse]);
    navigate(link);
  };
  const navigate = useNavigate();
  const link = "/";

  return (
    <div className="general">
      <form onSubmit={addNewHouse}>
        <div className="row mt-4 content">
          <div className="col-2 mb-2 ">
            <label>Address of the house</label>
          </div>
          <div className="col-4 mb-2 ">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Insert the address"
              required
            ></input>
          </div>
          <div className="col-1 mb-2 ">
            <input
              type="submit"
              value="Adding new House"
              className="but"
            ></input>
          </div>
        </div>
        <div className="row content">
          <div className="col-2 mb-2">
            <label>Owner of the house</label>
          </div>
          <div className="col-4 mb-2">
            <input
              type="text"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              placeholder="Insert the owner"
              required
            ></input>
          </div>
        </div>
        <div className="row content">
          <div className="col-2 mb-2">
            <label>Price of the house</label>
          </div>
          <div className="col-4 mb-2">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              placeholder="Insert the price"
              min={1000}
              required
            ></input>
          </div>
        </div>
        <div className="row content">
          <div className="col-2 mb-2">
            <label>Image of the house</label>
          </div>
          <div className="col-4 mb-2">
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Insert the image url"
            ></input>
          </div>
        </div>
        <div className="row content">
          <div className="col-2 mb-2">
            <label>Description of the house</label>
          </div>
          <div className="col-4 mb-2">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Insert the description of the house"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddHouse;
