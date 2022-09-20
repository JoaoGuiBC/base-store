import type { AppProps } from 'next/app';
import Image from 'next/future/image';

import logoImg from '../assets/logo.svg';

import { globalStyles } from '../styles/globals';
import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Base store logo" height={120} width={120} />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
