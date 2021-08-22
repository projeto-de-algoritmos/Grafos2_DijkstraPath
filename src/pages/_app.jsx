import NextNprogress from 'nextjs-progressbar';
import Head from 'next/head';
import { AlgorithmProvider } from '../contexts/Context';
import '../styles/index.css';

function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Dijkstra</title>
      </Head>
      <AlgorithmProvider>
        <NextNprogress color="rgb(0, 255, 170)" startPosition={0.2} stopDelayMs={750} height={4} showOnShallow={true} options={{ speed: 1500, easing: 'ease-in-out' }} />
        <main>
          <Component {...pageProps} />
        </main>
      </AlgorithmProvider>
    </>
  );
}

export default App;
