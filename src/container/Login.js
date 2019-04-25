import React, { Component, useState } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { useCookies } from 'react-cookie'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import './styles/LoginStyle.css'

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

function LoginPressed (email, password) {
  console.log(email, password)
}

export default function Login () {
  const [cookies, setCookie] = useCookies('accessToken')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <MuiThemeProvider theme={theme}>
      <div className='login-main'>

        <TextField
          className={'text-field'}
          id='outlined-name'
          label='Email'
          margin='normal'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          variant='outlined'
        />
        <TextField
          className={'text-field'}
          id='outlined-name'
          label='Password'
          value={password}
          type='Password'
          onChange={(event) => setPassword(event.target.value)}
          margin='normal'
          variant='outlined'
        />
        <Button
          className={'text-field button-field'}
          color='primary'
          onClick={() => LoginPressed(email, password)}
          variant='outlined' >
          Login
          </Button>

      </div>
    </MuiThemeProvider>
  )
}
