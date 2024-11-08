import Card from "../Card";
interface Image {
  src: string;
  alt: string;
}
interface ListOfCardsProps {
  card1: Array<Image>;
  card2: Array<Image>;
}

const ListOfCards: React.FC<ListOfCardsProps> = ({ card1, card2 }) => {
  return (
    <div>
      <div>
        <Card cards={card1} />
      </div>
      {/* <div>
        <Card cards={card2} />
      </div> */}
    </div>
  );
};

export default ListOfCards;
