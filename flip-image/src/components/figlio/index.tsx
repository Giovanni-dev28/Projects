import React from "react";
import "./index.css";

interface ImageDisplayProps {
  image: {
    src: string;
    alt: string;
  };
  rotationDirection: "right" | "left";
  rotationPhase: "start" | "complete";
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  image,
  rotationDirection,
  rotationPhase,
}) => {
  const rotationClass =
    rotationDirection === "right"
      ? rotationPhase === "start"
        ? "rotate-right"
        : "rotate-right-complete"
      : rotationPhase === "start"
      ? "rotate-left"
      : "rotate-left-complete";

  return (
    <div className="image-container">
      <img
        src={image.src}
        alt={image.alt}
        className={`image-flip ${rotationClass}`}
      />
    </div>
  );
};

export default ImageDisplay;
