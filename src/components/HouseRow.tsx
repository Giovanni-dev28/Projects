import "../css/HouseRowCss.css";
import React from "react";
import { NumericFormat } from "react-number-format";

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
      <td className="tableContent">
        <NumericFormat
          value={house.price.toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </td>
    </tr>
  );
};

const HouseRowMemo = React.memo(HouseRow);

export default HouseRow;
export { HouseRowMemo };
