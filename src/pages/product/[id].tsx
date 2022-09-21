import type { NextPage } from "next";

import Head from "next/head";
import { useRouter } from "next/router";

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

const Product: NextPage = () => {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <Head>
        <title>Base Store | Gorro X</title>
      </Head>

      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Gorro X</h1>
        <span>R$ 16,99</span>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nisi labore totam ducimus expedita deserunt fugiat fuga vel dolor nobis itaque beatae, tenetur vitae rem quisquam adipisci nihil at id?</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}

export default Product;
