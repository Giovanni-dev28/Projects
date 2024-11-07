import ListOfCards from "../components/ListOfCards";
import image1 from "../image/image1.png";
import image2 from "../image/image2.png";
import rear from "../image/rear.png";

interface Image {
  src: string;
  alt: string;
}
interface ListImage {
  card1: Array<Image>;
  card2: Array<Image>;
}
const Main = () => {
  const first: Array<Image> = [
    { src: image1, alt: "Image1" },
    { src: rear, alt: "Rear" },
  ];
  const second: Array<Image> = [
    { src: image2, alt: "Image2" },
    { src: rear, alt: "Rear" },
  ];
  const list: ListImage = { card1: first, card2: second };
  return (
    <div>
      <ListOfCards {...list} />
    </div>
  );
};

export default Main;
