import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import NextNProgress from 'nextjs-progressbar';

import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/Footer';
import config from 'site.config';
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import { AnimatePresence, motion as m } from 'framer-motion';
function MyApp({ Component, pageProps, router }: AppProps) {
  usePanelbear(config.panelbear, {
    debug: false,
  });
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <NextNProgress height={2} options={{ showSpinner: false }} />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <m.main
            key={router.route}
            className="flex h-full flex-grow flex-col"
            animate="enter"
            exit="exit"
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 2 },
              enter: { opacity: 1, y: 0, transition: { duration: 0.2 } },
              exit: { opacity: 0, transition: { duration: 0.1 } },
            }}
          >
            <Component {...pageProps} />
          </m.main>
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
