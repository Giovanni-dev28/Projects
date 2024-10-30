import { useNavigate } from "react-router-dom";
import "../css/Banner.css";
import logo from "../images/logo.jpeg";
import React from "react";

interface BannerProps {
  text: string;
  additionaText?: string;
  setSelectedHouse?: Function;
  setAddingHouse?: Function;
}

const Banner: React.FC<BannerProps> = ({ text, additionaText }) => {
  const navigate = useNavigate();
  const link = "/";

  return (
    <div>
      <header className="row bar">
        <div className="col-2 mt-3 mb-3">
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={() => navigate(link)}
          />
        </div>
        <div className="col-4 mt-3">
          <label className="title">{text}</label>
          <br />
          <label className="additionaText">{additionaText}</label>
        </div>
      </header>
    </div>
  );
};

export default Banner;
