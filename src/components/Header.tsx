import Image from 'next/future/image';
import { useRouter } from 'next/router';
import { Handbag } from 'phosphor-react';

import logoImg from '../assets/logo.svg';

import { HeaderContainer } from '../styles/components/header';

interface HeaderProps {
  changeModalVisibility: () => void;
}

export function Header({ changeModalVisibility }: HeaderProps) {
  const { pathname } = useRouter();

  return (
    <HeaderContainer page={pathname === '/success' ? 'success' : 'other'}>
      <Image src={logoImg} alt="Base store logo" height={120} width={120} />

      {pathname !== '/success' && (
        <button onClick={changeModalVisibility}>
          <Handbag size={24} />
        </button>
      )}
    </HeaderContainer>
  );
}