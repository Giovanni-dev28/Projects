import "../css/BannerCss.css";
import logo from "../images/logo.jpeg";
import React from "react";

interface BannerPorps {
  text: string;
  additionaText?: string;
  setSelectedHouse: Function;
  setAddingHouse: Function;
}

const Banner: React.FC<BannerPorps> = ({
  text,
  additionaText,
  setSelectedHouse,
  setAddingHouse,
}) => {
  const imgClicked = () => {
    setSelectedHouse(null);
    setAddingHouse(false);
  };
  return (
    <header className="row bar">
      <div className="col-2 mt-3 mb-3">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => {
            imgClicked();
          }}
        ></img>
      </div>
      <div className="col-4 mt-3">
        <label className="title">{text}</label>
        <br></br>
        <label className="additionaText">{additionaText}</label>
      </div>
    </header>
  );
};
export default Banner;
