import React, { useEffect, useState } from 'react';
import './App.css';
import { ImageSlider } from './components/ImageSlider';
import { ImageInfo } from './model/ImageInfo';
import retro from './assets/images/Retro.png';
import apologiaGiovane from './assets/images/Apologia_giovane.png';
import apologiaVecchio from './assets/images/Apologia_vecchio.png';
import ebrioGiovane from './assets/images/Ebrio_giovane.png';
import ebrioVecchio from './assets/images/Ebrio_vecchio.png';
import gliAmantiGiovane from './assets/images/GliAmanti_giovane.png';
import gliAmantiVecchio from './assets/images/GliAmanti_vecchio.png';
import ilBagattoGiovane from './assets/images/IlBagatto_giovane.png';
import ilBagattoVecchio from './assets/images/IlBagatto_vecchio.png';
import ilCambiamentoGiovane from './assets/images/IlCambiamento_giovane.png';
import ilCambiamentoVecchio from './assets/images/IlCambiamento_vecchio.png';
import laFortunaGiovane from './assets/images/LaFortuna_giovane.png';
import laFortunaVecchio from './assets/images/LaFortuna_vecchio.png';
import laMoraleGiovane from './assets/images/LaMorale_giovane.png';
import laMoraleVecchio from './assets/images/LaMorale_vecchio.png';
import laMorteGiovane from './assets/images/LaMorte_giovane.png';
import laMorteVecchio from './assets/images/LaMorte_vecchio.png';
import lAppesoGiovane from './assets/images/LAppeso_giovane.png';
import lAppesoVecchio from './assets/images/LAppeso_vecchio.png';
import laStellaGiovane from './assets/images/LaStella_giovane.png';
import laStellaVecchio from './assets/images/LaStella_vecchio.png';
import lAttesaGiovane from './assets/images/LAttesa_giovane.png';
import lAttesaVecchio from './assets/images/LAttesa_vecchio.png';

const imagesLeft: ImageInfo[] = [
  { src: apologiaGiovane, alt: apologiaGiovane },
  { src: retro, alt: retro },
  { src: ebrioGiovane, alt: ebrioGiovane },
  { src: retro, alt: retro },
  { src: gliAmantiGiovane, alt: gliAmantiGiovane },
  { src: retro, alt: retro },
  { src: ilBagattoGiovane, alt: ilBagattoGiovane },
  { src: retro, alt: retro },
  { src: ilCambiamentoGiovane, alt: ilCambiamentoGiovane },
  { src: retro, alt: retro },
  { src: laFortunaGiovane, alt: laFortunaGiovane },
  { src: retro, alt: retro },
  { src: laMoraleGiovane, alt: laMoraleGiovane },
  { src: retro, alt: retro },
  { src: laMorteGiovane, alt: laMorteGiovane },
  { src: retro, alt: retro },
  { src: lAppesoGiovane, alt: lAppesoGiovane },
  { src: retro, alt: retro },
  { src: laStellaGiovane, alt: laStellaGiovane },
  { src: retro, alt: retro },
  { src: lAttesaGiovane, alt: lAttesaGiovane },
];

const imagesRight: ImageInfo[] = [
  { src: apologiaVecchio, alt: apologiaVecchio },
  { src: retro, alt: retro },
  { src: ebrioVecchio, alt: ebrioVecchio },
  { src: retro, alt: retro },
  { src: gliAmantiVecchio, alt: gliAmantiVecchio },
  { src: retro, alt: retro },
  { src: ilBagattoVecchio, alt: ilBagattoVecchio },
  { src: retro, alt: retro },
  { src: ilCambiamentoVecchio, alt: ilCambiamentoVecchio },
  { src: retro, alt: retro },
  { src: laFortunaVecchio, alt: laFortunaVecchio },
  { src: retro, alt: retro },
  { src: laMoraleVecchio, alt: laMoraleVecchio },
  { src: retro, alt: retro },
  { src: laMorteVecchio, alt: laMorteVecchio },
  { src: retro, alt: retro },
  { src: lAppesoVecchio, alt: lAppesoVecchio },
  { src: retro, alt: retro },
  { src: laStellaVecchio, alt: laStellaVecchio },
  { src: retro, alt: retro },
  { src: lAttesaVecchio, alt: lAttesaVecchio },
];

function App() {
  const [loadedImagesLeft, setLoadedImagesLeft] = useState<ImageInfo[]>([]);
  const [loadedImagesRight, setLoadedImagesRight] = useState<ImageInfo[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promiseImagesLeft = imagesLeft.map((image) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = () => resolve();
        });
      });
      const promiseImagesRight = imagesRight.map((image) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = () => resolve();
        });
      });

      await Promise.all(promiseImagesLeft);
      await Promise.all(promiseImagesRight);
      setLoadedImagesLeft(imagesLeft);
      setLoadedImagesRight(imagesRight);
      setIsReady(true);
    };

    preloadImages();
  }, []);

  return (
    <div className="App">
      {isReady ? (
        <ImageSlider imagesLeft={loadedImagesLeft} imagesRight={loadedImagesRight} />
      ) : (
        'Caricamente immagini in corso...'
      )}
    </div>
  );
}

export default App;
