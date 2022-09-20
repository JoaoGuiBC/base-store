import type { NextPage } from 'next';
import Image from 'next/future/image';

import { HomeContainer, Product } from '../styles/pages/home';

import catHood from '../assets/products/cat.png';
import meltHood from '../assets/products/melt.png';
import confuseHood from '../assets/products/confuse.png';

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Product>
        <Image src={catHood} alt="beanie for sale" width={364} height={336} />

        <footer>
          <strong>Gorro Gatinho</strong>
          <span>R$ 16,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={meltHood} alt="beanie for sale" width={364} height={336} />

        <footer>
          <strong>Gorro Derretido</strong>
          <span>R$ 16,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export default Home;
