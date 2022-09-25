import type { GetStaticProps, NextPage } from 'next';

import Stripe from 'stripe';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';
import { useState, useEffect } from 'react';
import { getPlaiceholder } from 'plaiceholder';
import { useKeenSlider } from 'keen-slider/react';
import { CaretRight, CaretLeft, Handbag } from 'phosphor-react';

import { stripe } from '../lib/stripe';
import { useCheckoutBag } from '../hooks/useCheckoutBag';

import 'keen-slider/keen-slider.min.css';
import { HomeContainer, Product, SlideButton } from '../styles/pages/home';

interface Products {
  id: string,
  name: string,
  price: string,
  priceId: string,
  imageUrl: string,
  imageAlt: string,
  priceRaw: number,
  placeholderImage: string,
}

interface HomeProps {
  products: Products[],
}

const Home: NextPage<HomeProps> = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesLength, setSlidesLength] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  });

  const { addProductToBag } = useCheckoutBag();

  useEffect(() => {
    setSlidesLength(instanceRef!.current!.track.details.slides.length - 1);
  }, [instanceRef]);

  return (
    <>
      <Head>
        <title>Base Store</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">

        {products.map(product => (
          <Product key={product.id} className="keen-slider__slide">
            <Link href={`/product/${product.id}`} prefetch={false}>
              <Image
                src={product.imageUrl}
                blurDataURL={product.placeholderImage}
                alt={product.imageAlt}
                width={364}
                height={336}
                placeholder="blur"
              />
            </Link>

            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>
              <button onClick={() => addProductToBag(product)}>
                <Handbag size={30} />
              </button>
            </footer>
          </Product>
        ))}

        <SlideButton
          direction="left"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          disabled={currentSlide === 0}
        >
          <CaretLeft size={48} />
        </SlideButton>

        <SlideButton
          direction="right"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          disabled={currentSlide === slidesLength - 2}
        >
          <CaretRight size={48} />
        </SlideButton>
      </HomeContainer>
    </>
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
      priceId: price.id,
      name: product.name,
      placeholderImage: base64,
      imageUrl: product.images[0],
      imageAlt: product.metadata.alt,
      priceRaw: Number(price.unit_amount),
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
