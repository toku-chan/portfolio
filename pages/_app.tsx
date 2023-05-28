import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { css } from '@emotion/react';

const ResetStyles = css`
  html,
  body {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ul li {
      list-style: none;
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={ResetStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
