import ListOfCards from "../components/ListOfCards";
import image1 from "../image/image1.png";
import image2 from "../image/image2.png";
import image3 from "../image/image3.png";
import image4 from "../image/image4.png";
import image5 from "../image/image5.png";
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
    { src: image2, alt: "Image2" },
    { src: image3, alt: "Image3" },
    { src: image4, alt: "Image4" },
    { src: image5, alt: "Image5" },
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
