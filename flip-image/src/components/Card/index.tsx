import "./index.css";
import { useState, useEffect } from "react";

interface Image {
  src: string;
  alt: string;
}

interface CardProps {
  cards: Array<Image>;
}

const Card: React.FC<CardProps> = (prop) => {
  const length = prop.cards.length; //Number of cards
  const [index, setIndex] = useState(0); // Current Index
  const [rotateRight, setRotateRight] = useState(false);
  const [rotateLeft, setRotateLeft] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [index]);

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      if (index + 1 < length) {
        setRotateRight(true);
        setTimeout(() => {
          setIndex((prevIndex) => prevIndex + 1);
          setRotateRight(false);
        }, 800); // Tempo sincronizzato con l'animazione CSS
      }
    } else if (event.key === "ArrowLeft") {
      if (index - 1 > -1) {
        setRotateLeft(true);
        setTimeout(() => {
          setIndex((prevIndex) => prevIndex - 1);
          setRotateLeft(false);
        }, 800);
      }
    }
  };

  return (
    <div className="card">
      <div className="flip-box-inner">
        <div
          className={`flip-box ${rotateRight ? "rotateRight" : ""} ${
            rotateLeft ? "rotateLeft" : ""
          }`}
        >
          <img src={prop.cards[index].src} alt={prop.cards[index].alt}></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
