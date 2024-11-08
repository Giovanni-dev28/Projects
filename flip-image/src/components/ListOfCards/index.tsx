import { useState, useEffect } from "react";
import Card from "../Card";
import { eventNames } from "process";
interface Image {
  src: string;
  alt: string;
}
interface ListOfCardsProps {
  card: Array<Image>;
}

const ListOfCards: React.FC<ListOfCardsProps> = ({ card }) => {
  const [indexPreView, setIndexPreView] = useState(0);
  const [indexView, setIndexView] = useState(1);
  const [rotation, setRotation] = useState<"right" | "left" | null>(null);

  //Eseguito solo la prima volta dopo il render, dato che non ha dipendenze
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" && indexPreView + 1 < card.length) {
      setIndexView(indexPreView + 1);
      setRotation("right");
    } else if (event.key === "ArrowLeft" && indexPreView - 1 > -1) {
      setIndexView(indexPreView - 1);
      setRotation("left");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndexPreView((previous) => previous + 1);
    }, 800);
    return () => clearTimeout(timeout);
  }, [rotation]);

  return (
    <div>
      <div>
        {
          <Card
            front={card[indexPreView]}
            back={card[indexView]}
            rotation={rotation}
          />
        }
      </div>
    </div>
  );
};

export default ListOfCards;
