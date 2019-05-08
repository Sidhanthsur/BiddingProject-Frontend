import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import TextField from '@material-ui/core/TextField'
import  { gql } from 'apollo-boost'
import Button from '@material-ui/core/Button'
import { Mutation } from 'react-apollo'
import Progress from '../components/Progress'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './styles/SignupStyle.css'

const SIGNUP_MUTATION= gql `
mutation SignupMutation($email: String!, $password: String!, $name: String!) {
  signup (email:$email, password:$password,name:$name) {
    token
  }
}
`

export default function Signup () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [showError, setShowError] = useState(false)
    const [error, setError] = useState('')
    return (
        <Container className="signup-main" fluid>
         <Dialog
          open={showError}
        
          onClose={() => setShowError(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             {error}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
           
            <Button 
           
         
            color='primary'
           
            variant='outlined'
            onClick={() => setShowError(false)}>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
            <Row>
          <Col xs={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 4, offset: 4}} xl={{size: 4, offset: 4}}>
            <TextField
              fullWidth
              className={'text-field'}
              id='outlined-name'
              label='Name'
              margin='normal'
              value={name}
              onChange={(event) => setName(event.target.value)}
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
          mutation={SIGNUP_MUTATION}
          variables={{
            email,
            password,
            name
          }}
          onCompleted={(data) => console.log(data)}
          onError={(data) => setShowError(true)}
          >
          {
            (mutation, {loading, error}) => {
              if (error) {
                setError(JSON.stringify(error))
              }
              return (
                <div>
                   {loading && <Progress />}
                   <Button
                className={'text-field button-field'}
                fullWidth
                color='primary'
                onClick={mutation}
                variant='outlined' >
            Signup
            </Button>
                </div>
              )
            }
          }

          </Mutation>
      
           
          </Col>
        </Row>
        </Container>
    )
}