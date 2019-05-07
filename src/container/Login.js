import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import  { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
import { useCookies } from 'react-cookie'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Progress from '../components/Progress'
import { Route, Redirect } from 'react-router'
import './styles/LoginStyle.css'


const LOGIN_MUTATION = gql`
mutation LoginMutation($email: String!, $password: String!) {
  login (email: $email, password: $password) {
    token
    user {
      id
      name
      email
    }
  }
}
`


export default function Login () {
  const [cookies, setCookie] = useCookies('accessToken')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signUpPressed, setSignup] = useState(false)
  if (signUpPressed) {
    return <Redirect to='/signup' />
  }
  return (
   

      <Container fluid className='login-main'>
        {/* <div className='login-main'> */}

        <span className={'login-title'}>Hello !</span>
        <Row>
        <Col xs={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 4, offset: 4}}  xl={{size: 4, offset: 4}}>
            <TextField
              fullWidth
              className={'text-field'}
              id='outlined-name'
              label='Email'
              margin='normal'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              variant='outlined'
        />
          </Col>
        </Row>
        <Row>
        <Col xs={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 4, offset: 4}}  xl={{size: 4, offset: 4}}>
            <TextField
              fullWidth
              className={'text-field'}
              id='outlined-name'
              label='Password'
              value={password}
              type='Password'
              onChange={(event) => setPassword(event.target.value)}
              margin='normal'
              variant='outlined'
        />
          </Col>
        </Row>

        <Row>
        <Col xs={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 4, offset: 4}}  xl={{size: 4, offset: 4}}>
          <Mutation
      mutation={LOGIN_MUTATION}
      variables={{ email, password }}
      onCompleted={data => console.log(JSON.stringify(data, undefined,2))}
      onError={error => console.log(error)}
      loading={loading => console.log(loading)}
      >
          {
            (mutation, {loading, error}) => (
              <div>
              {loading && <Progress />}
              <Button
              className={'text-field button-field'}
              fullWidth
              color='primary'
              onClick={mutation}
              variant='outlined' >
          Login
          </Button>
          </div>
            )
            
          }
           </Mutation>
           
          </Col>
        </Row>
        <Row>
        <Col xs={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 4, offset: 4}}  xl={{size: 4, offset: 4}}>
          <a href='/signup'>
          <h5 style={{ textAlign: 'center', marginTop: 24, color: 'white'}}>New User ?</h5>
          </a>
          </Col>
        </Row>

        {/* </div> */}
      </Container>

   
  )
}
