import { useState, useEffect } from "react";
import Card from "../Card";
interface Image {
  src: string;
  alt: string;
}
interface ListOfCardsProps {
  card: Array<Image>;
}

const ListOfCards: React.FC<ListOfCardsProps> = ({ card }) => {
  //Eseguito solo la prima volta dopo il render, dato che non ha dipendenze
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
    } else if (event.key === "ArrowLeft") {
    }
  };

  return (
    <div>
      <div>
        {/* <Card
          front={card[indexFront]}
          back={card[indexBack]}
          rotation={rotation}
        /> */}
      </div>
    </div>
  );
};

export default ListOfCards;
