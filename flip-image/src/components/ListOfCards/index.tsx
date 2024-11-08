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
  const [indexFront, setIndexFront] = useState(0);
  const [indexBack, setIndexBack] = useState(0);
  const [index, setIndex] = useState(0);

  const [rotation, setRotation] = useState<"right" | "left" | null>(null);

  //Eseguito solo la prima volta dopo il render, dato che non ha dipendenze
  useEffect(() => {
    window.addEventListener("keydown", useHandleKeydown);
    return () => window.removeEventListener("keydown", useHandleKeydown);
  });

  const useHandleKeydown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" && index + 1 < card.length) {
      setIndexFront(index);
      setRotation("right");
      setIndexBack(index + 1);
      setIndex(index + 1);
      console.log("destra", " ", index, " ", indexFront, " ", indexBack);
    } else if (event.key === "ArrowLeft" && index - 1 > -1) {
      setRotation("left");
      setIndexBack(index - 1);
      setIndex((p) => p - 1);
      console.log("sinistra", " ", index, " ", indexFront, " ", indexBack);
    }
  };

  return (
    <div>
      <div>
        {
          <Card
            front={card[indexFront]}
            back={card[indexBack]}
            rotation={rotation}
          />
        }
      </div>
    </div>
  );
};

export default ListOfCards;
