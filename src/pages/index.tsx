import type { GetStaticProps, NextPage } from 'next';

import Stripe from 'stripe';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';
import { getPlaiceholder } from 'plaiceholder';
import { useKeenSlider } from 'keen-slider/react';

import { stripe } from '../lib/stripe';

import 'keen-slider/keen-slider.min.css';
import { HomeContainer, Product } from '../styles/pages/home';

interface Products {
  id: string,
  name: string,
  price: string,
  imageUrl: string,
  imageAlt: string,
  placeholderImage: string,
}

interface HomeProps {
  products: Products[],
}

const Home: NextPage<HomeProps> = ({ products }) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Head>
        <title>Base Store</title>
      </Head>

      {products.map(product => (
        <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
          <Product className="keen-slider__slide">
            <Image
              src={product.imageUrl}
              blurDataURL={product.placeholderImage}
              alt={product.imageAlt}
              width={364}
              height={336}
              placeholder="blur"
            />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        </Link>
      ))}
    </HomeContainer>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<{ products: Products[] }> = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = await Promise.all(response.data.map(async product => {
    const price = product.default_price as Stripe.Price;

    const { base64 } = await getPlaiceholder(product.images[0]);

    return {
      id: product.id,
      name: product.name,
      placeholderImage: base64,
      imageUrl: product.images[0],
      imageAlt: product.metadata.alt,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(Number(price.unit_amount) / 100),
    }
  }));

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
