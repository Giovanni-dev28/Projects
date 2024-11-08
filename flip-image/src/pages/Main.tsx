import ListOfCards from "../components/ListOfCards";
import Padre from "../components/padre";
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
const Main = () => {
  const first: Image[] = [
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
  ];
  /* const second: Array<Image> = [
    { src: image2, alt: "Image2" },
    { src: rear, alt: "Rear" },
  ]; */
  return (
    <div>
      <ListOfCards card={first} />
      {/* <ListOfCards card={second} /> */}
      {/* <Padre images={first} /> */}
    </div>
  );
};

export default Main;
