import '@/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Modelo Comprensivo de Intolerancia a la Lactosa</title>
        <meta name="description" content="Un modelo comprensivo multinivel de la intolerancia a la lactosa que reconceptualiza esta condición como un espectro multifactorial." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
} 