import React from "react";
import "./index.css";
import rear from "../../image/rear.png";

interface ImageDisplayProp {
  image: { src: string; alt: string };
  flip: boolean;
  onAnimationEnd: React.Dispatch<React.SetStateAction<any>>;
}
const ImageDisplay = ({ image, flip, onAnimationEnd }: ImageDisplayProp) => {
  return (
    <div
      className={`image-container ${flip ? "flip" : ""}`}
      onAnimationEnd={onAnimationEnd}
    >
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default ImageDisplay;
