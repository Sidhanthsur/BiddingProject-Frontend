import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './styles/SignupStyle.css'

export default function Signup () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    return (
        <Container className="signup-main" fluid>
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
        
              <Button
              className={'text-field button-field'}
              fullWidth
              color='primary'
              onClick={() => console.log('yo')}
              variant='outlined' >
          Signup
          </Button>
      
           
          </Col>
        </Row>
        </Container>
    )
}