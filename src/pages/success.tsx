import type { GetServerSideProps, NextPage } from 'next';

import Stripe from 'stripe';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';

import { stripe } from '../lib/stripe';

import { Counter, ImageContainer, ImagesWrapper, SuccessContainer } from '../styles/pages/success';
import { getPlaiceholder } from 'plaiceholder';

interface Product {
  name: string,
  imageUrl: string,
  imageAlt: string,
  placeholderImage: string,
}

interface SuccessProps {
  products: Product[],
  customerName: string,
  extraProductsCounter: number,
}

const Success: NextPage<SuccessProps> = ({ customerName, products, extraProductsCounter }) => {
  

  return (
    <>
      <Head>
        <title>Base Store | Compra efetuada</title>

        <meta name="robots" content="noindex" />
      </Head>
    
      <SuccessContainer>
        <ImagesWrapper quantity={products.length}>
          {products.map(product => (
            <ImageContainer key={product.name}>
              <Image
                src={product.imageUrl}
                blurDataURL={product.placeholderImage}
                alt={product.imageAlt}
                width={120}
                height={110}
                placeholder="blur"
              />
            </ImageContainer>
          ))}

          {extraProductsCounter > 0 && (
            <Counter>+{extraProductsCounter}</Counter>
          )}
        </ImagesWrapper>

        <h1>Compra efetuada!</h1>

        <p>
          Sucesso <strong>{customerName}</strong>, sua compra já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export default Success;

export const getServerSideProps: GetServerSideProps<SuccessProps> = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details?.name!;
  const extraProductsCounter = session.line_items?.data?.length! - 3;
  const products = session.line_items?.data
    .map(product => product.price?.product)
    .filter((_, index) => index < 3) as Stripe.Product[];

  const mountedProducts = await Promise.all(products.map(async product => {
    const { base64 } = await getPlaiceholder(product.images[0]);

    return {
      name: product.name,
      placeholderImage: base64,
      imageUrl: product.images[0],
      imageAlt: product.metadata.alt,
    }
  }));

  console.log(products);

  return {
    props: {
      customerName,
      extraProductsCounter,
      products: mountedProducts,
    },
  }
};
