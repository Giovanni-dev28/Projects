import "../css/HouseRowCss.css";
import React from "react";

interface HouseRowProps {
  house: {
    address: string;
    owner: string;
    price: number;
  };
  selectedHouse: Function;
}

const HouseRow: React.FC<HouseRowProps> = ({ house, selectedHouse }) => {
  return (
    <tr onClick={() => selectedHouse(house)}>
      <td className="tableContent">{house.address}</td>
      <td className="tableContent">{house.owner}</td>
      <td className="tableContent">{house.price}</td>
    </tr>
  );
};

const HouseRowMemo = React.memo(HouseRow);

export default HouseRow;
export { HouseRowMemo };
