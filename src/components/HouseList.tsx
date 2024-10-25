import { useContext } from "react";
import "../css/HouseList.css";
import HouseRowMemo from "./HouseRow";

import { HousesContext } from "../pages/Home";
import Adding from "./Adding";

const HouseList = () => {
  const housesCont = useContext(HousesContext);
  return (
    <>
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
            {housesCont.houses.map((h) => {
              return <HouseRowMemo key={h.id} house={h} />;
            })}
          </tbody>
        </table>
        <Adding />
      </div>
    </>
  );
};
export default HouseList;
