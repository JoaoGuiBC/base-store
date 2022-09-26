import type { AppProps } from 'next/app';

import { useState } from 'react';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import { Handbag } from 'phosphor-react';

import logoImg from '../assets/logo.svg';

import { Modal } from '../components/Modal';
import { CheckoutProvider } from '../hooks/useCheckoutBag';

import {
  Container,
  Header,
} from '../styles/pages/app';
import { globalStyles } from '../styles/globals';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isModalHidden, setIsModalHidden] = useState(true);

  const { pathname } = useRouter();

  function handleChangeModalVisibility() {
    setIsModalHidden(!isModalHidden);
  };

  return (
    <CheckoutProvider>
      <Container>
        <Header page={pathname === '/success' ? 'success' : 'other'}>
          <Image src={logoImg} alt="Base store logo" height={120} width={120} />

          {pathname !== '/success' && (
            <button onClick={handleChangeModalVisibility}>
              <Handbag size={24} />
            </button>
          )}
        </Header>

        <Modal
          isModalHidden={isModalHidden}
          changeModalVisibility={handleChangeModalVisibility}
        />

        <Component {...pageProps} />
      </Container>
    </CheckoutProvider>
  );
}
