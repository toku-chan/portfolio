import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { ResetStyles } from './ResetStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={ResetStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
