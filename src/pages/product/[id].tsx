import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Stripe from "stripe";
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";

import { stripe } from "../../lib/stripe";

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import Image from "next/future/image";

interface Product {
  id: string,
  name: string,
  price: string,
  imageUrl: string,
  imageAlt: string,
  description: string,
  defaultPriceId: string,
  placeholderImage: string,
}

interface ProductProps {
  product: Product,
}

const Product: NextPage<ProductProps> = ({ product }) => {
  function handleBuyProduct() {
    console.log(product.defaultPriceId);
  }

  return (
    <ProductContainer>
      <Head>
        <title>Base Store | {product.name}</title>
      </Head>

      <ImageContainer>
        <Image
          src={product.imageUrl}
          blurDataURL={product.placeholderImage}
          alt={product.imageAlt}
          width={364}
          height={336}
          placeholder="blur"
        />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button onClick={handleBuyProduct}>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
} 

export const getStaticProps: GetStaticProps<{ product: Product }, { id: string }> = async ({ params }) => {
  const productId = params!.id;
  
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  const { base64 } = await getPlaiceholder(product.images[0]);

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        defaultPriceId: price.id,
        placeholderImage: base64,
        imageUrl: product.images[0],
        imageAlt: product.metadata.alt,
        description: String(product.description),
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(Number(price.unit_amount) / 100),
      }
    },
    revalidate: 60 * 60 * 3, // 3 hours
  };
}
