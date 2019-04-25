import React, { Component } from 'react'
import './App.css'
import LaunchScreen from './container/LaunchScreen'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { CookiesProvider } from 'react-cookie'
console.log(process.env.REACT_APP_ENDPOINT)
const client = new ApolloClient({ uri: process.env.REACT_APP_ENDPOINT })

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <CookiesProvider>
          <LaunchScreen />
        </CookiesProvider>
      </ApolloProvider>
    )
  }
}

export default App
