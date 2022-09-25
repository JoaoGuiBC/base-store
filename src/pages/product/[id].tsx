import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Stripe from "stripe";
import Head from "next/head";
import { useState } from "react";
import Image from "next/future/image";
import { getPlaiceholder } from "plaiceholder";

import { stripe } from "../../lib/stripe";
import { useCheckoutBag } from "../../hooks/useCheckoutBag";

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

interface Product {
  id: string,
  name: string,
  price: string,
  priceId: string,
  imageUrl: string,
  imageAlt: string,
  priceRaw: number,
  description: string,
  placeholderImage: string,
}

interface ProductProps {
  product: Product,
}

const Product: NextPage<ProductProps> = ({ product }) => {
  const { addProductToBag } = useCheckoutBag();

  return (
    <>
      <Head>
        <title>Base Store | {product.name}</title>
      </Head>
      <ProductContainer>
        

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

          <button onClick={() => addProductToBag(product)}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
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
        priceId: price.id,
        placeholderImage: base64,
        imageUrl: product.images[0],
        imageAlt: product.metadata.alt,
        priceRaw: Number(price.unit_amount),
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
