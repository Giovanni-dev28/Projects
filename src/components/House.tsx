import "../css/HouseCss.css";
interface HouseProps {
  house: {
    description: string;
    price: number;
    image: string;
  };
}
const House: React.FC<HouseProps> = ({ house }) => {
  return (
    <div className="row">
      <div className="col-sm-5 mt-10">
        <img
          src={house.image}
          alt="House not found"
          className="HouseImage"
        ></img>
      </div>
      <div className="col-sm-6 mt-20 content">
        <div className="row mt-5">
          <h2 className="headers">Description of the house</h2>
          <p className="text">{house.description}</p>
        </div>
        <div className="row">
          <h2 className="headers">Price</h2>
          <p className="text">{house.price}</p>
        </div>
      </div>
    </div>
  );
};

export default House;
