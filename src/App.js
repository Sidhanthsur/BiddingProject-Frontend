import React, { Component } from 'react'
import './App.css'
import LaunchScreen from './container/LaunchScreen'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { CookiesProvider } from 'react-cookie'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
    primary: {
      main: '#32B515'
    }
  },
  overrides: {
    MuiButton: {
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
      },
      outlined: {
        marginTop: 20
      }
    }
  }

})
console.log(process.env.REACT_APP_ENDPOINT)
const client = new ApolloClient({ uri: process.env.REACT_APP_ENDPOINT })

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
       <MuiThemeProvider theme={theme}>
        <CookiesProvider>
          
          <LaunchScreen />
        </CookiesProvider>
        </MuiThemeProvider>
      </ApolloProvider>
    )
  }
}

export default App
