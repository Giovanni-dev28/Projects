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
  const length = prop.cards.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [direction, setDirection] = useState<"right" | "left" | null>(null);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (isRotating) return; // Evita di attivare altre animazioni se già in corso

      if (event.key === "ArrowRight" && currentIndex + 1 < length) {
        setDirection("right");
        setNextIndex(currentIndex + 1);
        setIsRotating(true);
      } else if (event.key === "ArrowLeft" && currentIndex - 1 >= 0) {
        setDirection("left");
        setPrevIndex(currentIndex - 1);
        setIsRotating(true);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [currentIndex, isRotating, length]);

  useEffect(() => {
    if (!isRotating) return;

    const timeout = setTimeout(() => {
      if (direction === "right") {
        setPrevIndex(currentIndex);
        setCurrentIndex(nextIndex);
      } else if (direction === "left") {
        setNextIndex(currentIndex);
        setCurrentIndex(prevIndex);
      }
      setIsRotating(false);
      setDirection(null);
    }, 800); // Durata dell'animazione

    return () => clearTimeout(timeout);
  }, [isRotating, nextIndex, prevIndex, currentIndex, direction]);

  return (
    <>
      <div className="card">
        <div
          className={`flip-box-inner flip-box-inner ${
            direction === "right" ? "rotateRight" : ""
          } ${direction === "left" ? "rotateLeft" : ""}`}
        >
          <div className="flip-box front">
            <img
              src={prop.cards[currentIndex].src}
              alt={prop.cards[currentIndex].alt}
            ></img>
          </div>
          <div className="flip-box back">
            {isRotating && direction === "right" && (
              <img
                className="rotateRight"
                src={prop.cards[nextIndex].src}
                alt={prop.cards[nextIndex].alt}
              ></img>
            )}
            {isRotating && direction === "left" && (
              <img
                className="rotateLeft"
                src={prop.cards[prevIndex].src}
                alt={prop.cards[prevIndex].alt}
              ></img>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
