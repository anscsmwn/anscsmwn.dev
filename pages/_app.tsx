import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import NextNProgress from 'nextjs-progressbar';

import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/Footer';
import config from 'site.config';
import { usePanelbear } from '@panelbear/panelbear-nextjs';
function MyApp({ Component, pageProps }: AppProps) {
  usePanelbear(config.panelbear, {
    debug: false,
  });
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <NextNProgress height={2} />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex h-full flex-grow flex-col">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
