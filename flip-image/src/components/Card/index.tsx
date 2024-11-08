import "./index.css";
import { useState, useEffect } from "react";

interface Image {
  src: string;
  alt: string;
}

interface CardProps {
  front: Image;
  back: Image;
  rotation: string | null;
}

const Card: React.FC<CardProps> = (prop) => {
  const [isRotating, setIsRotating] = useState(false);

  //Si esegue ogni volta che i valori delle dipendenze cambiano
  useEffect(() => {
    if (!isRotating) return;

    const timeout = setTimeout(() => {
      setIsRotating(false);
    }, 800); // Durata dell'animazione
    prop.rotation = null;
    return () => clearTimeout(timeout);
  }, [isRotating, prop]);
  console.log(
    "ImageFront: ",
    prop.front.alt,
    " ImageBack: ",
    prop.back.alt,
    " Rotation: ",
    prop.rotation
  );
  return (
    <>
      <div className="card">
        <div
          className={`flip-box-inner- prop.rotation === "right" ? "rotateRight" : ""
          }${prop.rotation === "left" ? "rotateLeft" : ""}`}
        >
          <div className="flip-box-front">
            <img src={prop.front.src} alt={prop.front.alt}></img>
          </div>
          <div
            className={`flip-box-back prop.rotation === "right" ? "rotateRight" : ""
          }${prop.rotation === "left" ? "rotateLeft" : ""}`}
          >
            <img src={prop.back.src} alt={prop.back.alt}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
