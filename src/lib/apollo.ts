import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apollo = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache({
    addTypename: false
  })
})
