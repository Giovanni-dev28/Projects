import React, { useEffect, useState } from 'react';
import { Image } from '../Image';
import { ImageInfo } from '../../model/ImageInfo';

interface ImageSliderProps {
  imagesLeft: ImageInfo[];
  imagesRight?: ImageInfo[];
}

export function ImageSlider({ imagesLeft, imagesRight }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotating, setRotating] = useState(0);
  const imagesLength = imagesLeft.length;

  useEffect(() => {
    const startRotation = (direction: 'right' | 'left') => {
      setTimeout(() => {
        setCurrentIndex((prevIndex: number) =>
          direction === 'right' ? (prevIndex + 1) % imagesLength : (prevIndex - 1 + imagesLength) % imagesLength
        );
      }, 500); //Setta un timeout di 0.5 secondi per poi cambiare l'immagine della carta, la transizione dura un secondo
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentIndex + 1 < imagesLength) {
        startRotation('right');
        setRotating((old: number) => old + 1);
      } else if (e.key === 'ArrowLeft' && currentIndex - 1 >= 0) {
        startRotation('left');
        setRotating((old: number) => old - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [imagesLength, currentIndex]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '280px' }}>
          <Image image={imagesLeft[currentIndex]} rotating={rotating} />
        </div>
        <div>{imagesRight ? <Image image={imagesRight[currentIndex]} rotating={rotating} /> : null} </div>
      </div>
    </>
  );
}
