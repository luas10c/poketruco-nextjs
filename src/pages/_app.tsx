import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { apollo } from '#/lib/apollo'

import '../styles/globals.css'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
