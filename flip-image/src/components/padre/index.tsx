import React, { useState, useEffect } from "react";
import ImageDisplay from "../figlio";

interface Image {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotationPhase, setRotationPhase] = useState<"start" | "complete">(
    "start"
  );
  const [rotationDirection, setRotationDirection] = useState<"right" | "left">(
    "right"
  );

  const startRotation = (direction: "right" | "left") => {
    setRotationDirection(direction);
    setRotationPhase("start"); // Avvia la rotazione alla fase "start"

    setTimeout(() => {
      // Cambiamo l'immagine quando la rotazione arriva a 90 gradi
      setCurrentIndex((prevIndex) =>
        direction === "right"
          ? (prevIndex + 1) % images.length
          : (prevIndex - 1 + images.length) % images.length
      );
      setRotationPhase("complete"); // Completa la rotazione
    }, 300); // Tempo per raggiungere i 90 gradi (metà della transizione)
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        startRotation("right");
      } else if (e.key === "ArrowLeft") {
        startRotation("left");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length]);

  return (
    <ImageDisplay
      image={images[currentIndex]}
      rotationDirection={rotationDirection}
      rotationPhase={rotationPhase}
    />
  );
};

export default ImageSlider;
