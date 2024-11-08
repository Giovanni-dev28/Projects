import React, { useState, useEffect } from "react";
import ImageDisplay from "../figlio";
import image1 from "../../image/image1.png";
import image2 from "../../image/image2.png";
import image3 from "../../image/image3.png";
import image4 from "../../image/image4.png";
import image5 from "../../image/image5.png";
import rear from "../../image/rear.png";

const images = [
  { src: image1, alt: "Image1" },
  { src: rear, alt: "Rear" },
  { src: image2, alt: "Image2" },
  { src: rear, alt: "Rear" },
  { src: image3, alt: "Image3" },
  { src: rear, alt: "Rear" },
  { src: image4, alt: "Image4" },
  { src: rear, alt: "Rear" },
  { src: image5, alt: "Image5" },
  { src: rear, alt: "Rear" },
  // Aggiungi altre immagini...
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  // Gestisce l'evento di pressione del tasto
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setFlip(true); // Attiva l'effetto di capovolgimento
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      } else if (event.key === "ArrowLeft") {
        setFlip(true);
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ImageDisplay
      image={images[currentIndex]}
      flip={flip}
      onAnimationEnd={() => setFlip(false)}
    />
  );
};

export default ImageSlider;
