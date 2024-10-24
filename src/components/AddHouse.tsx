import { useState } from "react";
import "../css/AddHouseCss.css";

interface House {
  id: number;
  address: string;
  owner: string;
  price: number;
  image: string;
  description: string;
}
interface AddHouseProps {
  setHouses: Function;
  houses: Array<House>;
  setAddingHouse: Function;
}
const AddHouse: React.FC<AddHouseProps> = ({
  setHouses,
  houses,
  setAddingHouse,
}) => {
  const [address, setAddress] = useState("");
  const [owner, setOwner] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const addNewHouse = () => {
    const newHouse = {
      id: houses.length + 1,
      address: address,
      owner: owner,
      price: price,
      image: image,
      description: description,
    };
    houses.push(newHouse);
    setAddingHouse(false);
  };
  return (
    <div>
      <form onSubmit={addNewHouse}>
        <div className="col ml-5 mr-10">
          <table>
            <tbody className="rowContent">
              <tr className="rowContent">
                <td>House address:</td>
                <td>
                  <input
                    type="text"
                    name="addressF"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Insert the address"
                    required
                  ></input>
                </td>
                <td>
                  <input type="submit" value="Add new House"></input>
                </td>
              </tr>
              <tr className="rowContent">
                <td>Owner of the house:</td>
                <td>
                  <input
                    type="text"
                    name="ownerF"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    placeholder="Insert the owner "
                    required
                  ></input>
                </td>
              </tr>
              <tr className="rowContent">
                <td>Price of the house:</td>
                <td>
                  <input
                    type="number"
                    name="priceF"
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                    min={1000}
                    placeholder="Insert the price"
                    required
                  ></input>
                </td>
              </tr>
              <tr className="rowContent">
                <td>Url of the image of the house</td>
                <td>
                  <input
                    type="text"
                    name="imageF"
                    value={image}
                    placeholder="Insert the url image"
                    onChange={(e) => setImage(e.target.value)}
                  ></input>
                </td>
              </tr>
              <tr className="rowContent">
                <td>Description of the house</td>
                <td>
                  <textarea
                    name="descriptionF"
                    placeholder="Insert the description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default AddHouse;
