import "../css/HouseRowCss.css";
import React from "react";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

interface HouseRowProps {
  house: {
    id: number;
    address: string;
    owner: string;
    price: number;
    description: string;
  };
}

const HouseRow: React.FC<HouseRowProps> = ({ house }) => {
  const navigate = useNavigate();
  const link = `selectedHouse/view?id=${house.id}`;
  return (
    <tr>
      <td className="tableContent">{house.address}</td>
      <td className="tableContent">{house.owner}</td>
      <td className="tableContent">
        <NumericFormat
          value={house.price.toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button
          style={{ float: "right" }}
          className="buttonView"
          onClick={() => navigate(link)}
        >
          View House
        </button>
      </td>
    </tr>
  );
};

const HouseRowMemo = React.memo(HouseRow);

export default HouseRow;
export { HouseRowMemo };
