import type { AppProps } from 'next/app';

import { useState } from 'react';
import Image from 'next/future/image';
import { Handbag, X } from 'phosphor-react';

import logoImg from '../assets/logo.svg';

import { globalStyles } from '../styles/globals';
import {
  Container,
  Header,
  ImageContainer,
  ModalContainer,
  ModalWrapper,
  ProductsContainer,
  Product,
  Footer,
} from '../styles/pages/app';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isModalHidden, setIsModalHidden] = useState(true);

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Base store logo" height={120} width={120} />

        <button onClick={() => setIsModalHidden(false)}>
          <Handbag size={24} />
        </button>
      </Header>

      <ModalWrapper off={isModalHidden} onClick={() => setIsModalHidden(true)}>
        <ModalContainer off={isModalHidden}>
          <button onClick={() => setIsModalHidden(true)}>
            <X size={24} />
          </button>

          <strong>Sacola de compras</strong>

          <ProductsContainer>
            <Product>
              <ImageContainer>
                <Image alt="" width={94} height={94} src="https://files.stripe.com/links/MDB8YWNjdF8xTGtCZmhGMzB3YU9NYldPfGZsX3Rlc3RfN0VmUWllTTR6aHNWVnBZMWNKdGhCVFFK00Akt32M1H" />
              </ImageContainer>

              <div>
                <span>Gorro X</span>
                <strong>R$ 16,99</strong>

                <button>Remover</button>
              </div>
            </Product>
            <Product>
              <ImageContainer>
                <Image alt="" width={94} height={94} src="https://files.stripe.com/links/MDB8YWNjdF8xTGtCZmhGMzB3YU9NYldPfGZsX3Rlc3RfN0VmUWllTTR6aHNWVnBZMWNKdGhCVFFK00Akt32M1H" />
              </ImageContainer>

              <div>
                <span>Gorro X</span>
                <strong>R$ 16,99</strong>

                <button>Remover</button>
              </div>
            </Product>
            <Product>
              <ImageContainer>
                <Image alt="" width={94} height={94} src="https://files.stripe.com/links/MDB8YWNjdF8xTGtCZmhGMzB3YU9NYldPfGZsX3Rlc3RfN0VmUWllTTR6aHNWVnBZMWNKdGhCVFFK00Akt32M1H" />
              </ImageContainer>

              <div>
                <span>Gorro X</span>
                <strong>R$ 16,99</strong>

                <button>Remover</button>
              </div>
            </Product>
          </ProductsContainer>

          <Footer>
            <div>
              <span>Quantidade</span>
              <span>3 itens</span>
            </div>
            <div>
              <strong>Valor total</strong>
              <strong>R$ 50,97</strong>
            </div>

            <button>Finalizar compra</button>
          </Footer>
        </ModalContainer>
      </ModalWrapper>

      <Component {...pageProps} />
    </Container>
  );
}
