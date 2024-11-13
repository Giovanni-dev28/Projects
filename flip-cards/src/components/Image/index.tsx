import './style.css';

interface ImageProps {
  image: {
    src: string;
    alt: string;
  };
  rotating: number;
}

export function Image({ image, rotating }: ImageProps) {
  return (
    <div className="image-container">
      <img
        src={image.src}
        alt={image.alt}
        className={`image-flip`}
        style={{
          width: '450px',
          transform: `rotateY(${rotating * 180}deg) scaleX(${rotating % 2 === 0 ? 1 : -1})`,
        }}
      />
    </div>
  );
}
