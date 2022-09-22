import type { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';

import { ImageContainer, SuccessContainer } from '../styles/pages/success';

const Success: NextPage = () => {

  return (
    <SuccessContainer>
      <Head>
        <title>Base Store | Compra efetuada</title>
      </Head>

      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Sucesso <strong>JoaoGuiBC</strong>, seu <strong>Gorro Esqueleto</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}

export default Success;
