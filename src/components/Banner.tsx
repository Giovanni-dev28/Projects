import "../css/BannerCss.css";
import logo from "../images/logo.jpeg";
import React from "react";

interface BannerPorps {
  text: string;
  setSelectedHouse: Function;
  setAddingHouse: Function;
}
const Banner: React.FC<BannerPorps> = ({
  text,
  setSelectedHouse,
  setAddingHouse,
}) => {
  //Devo definire che il prop che sto passando è di tipo ReactNode
  return (
    <header className="row bar">
      <div className="col-2 mt-3 mb-3">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => {
            setSelectedHouse(null);
            setAddingHouse(false);
          }}
        ></img>
      </div>
      <div className="col-4 mt-3">
        <h2 className="title">{text}</h2>
      </div>
    </header>
  );
};
export default Banner;
