import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import * as gtag from '../lib/gtag';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import Header from '../components/Header';
// import { GiShoppingCart } from 'react-icons/gi';
// import { Action, Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { useRouter } from 'next/router';
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
