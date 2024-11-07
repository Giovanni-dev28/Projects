import imageList from "../../helper/ImageList";
import "./index.css";
import rear from "../../image/rear.png";
import { useState } from "react";

interface Image {
  src: string;
  alt: string;
}

interface CardProps {
  cards: Array<Image>;
}
const Card: React.FC<CardProps> = (prop) => {
  /* const length = prop.cards.length;
  const [index, setIndex] = useState(0); */
  return (
    <div className="card">
      <div className="flip-box-inner">
        <div className="flip-box-front">
          <img src={prop.cards[0].src} alt={prop.cards[0].alt}></img>
        </div>
        <div className="flip-box-back">
          <img src={prop.cards[1].src} alt={prop.cards[1].alt}></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
