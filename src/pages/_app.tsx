import type { AppProps } from 'next/app';

import { globalStyles } from '../styles/globals';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
