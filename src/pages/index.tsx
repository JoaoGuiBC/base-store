import type { NextPage } from 'next';
import Image from 'next/future/image';
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import { HomeContainer, Product } from '../styles/pages/home';

import catHood from '../assets/products/cat.png';
import meltHood from '../assets/products/melt.png';
import confuseHood from '../assets/products/confuse.png';
import happyHood from '../assets/products/happy.png';

const Home: NextPage = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={catHood} alt="beanie for sale" width={364} height={336} />

        <footer>
          <strong>Gorro Gatinho</strong>
          <span>R$ 16,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={meltHood} alt="beanie for sale" width={364} height={336} />

        <footer>
          <strong>Gorro Derretido</strong>
          <span>R$ 16,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={confuseHood} alt="beanie for sale" width={364} height={336} />

        <footer>
          <strong>Gorro Confuso</strong>
          <span>R$ 16,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={happyHood} alt="beanie for sale" width={364} height={336} />

        <footer>
          <strong>Gorro Feliz</strong>
          <span>R$ 16,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export default Home;
