import type { AppProps } from 'next/app';
import { useState } from 'react';

import { Modal } from '../components/Modal';
import { CheckoutProvider } from '../hooks/useCheckoutBag';

import { Container } from '../styles/pages/app';
import { globalStyles } from '../styles/globals';
import { Header } from '../components/Header';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isModalHidden, setIsModalHidden] = useState(true);

  function handleChangeModalVisibility() {
    setIsModalHidden(!isModalHidden);
  };

  return (
    <CheckoutProvider>
      <Container>
        <Header changeModalVisibility={handleChangeModalVisibility} />

        <Modal
          isModalHidden={isModalHidden}
          changeModalVisibility={handleChangeModalVisibility}
        />

        <Component {...pageProps} />
      </Container>
    </CheckoutProvider>
  );
}
