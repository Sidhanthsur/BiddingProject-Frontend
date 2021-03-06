import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { useCookies } from 'react-cookie'
import Login from './Login'
import Progress from '../components/Progress'
import { Redirect } from 'react-router'
import './styles/LaunchScreenStyle.css'

const GET_MOVIES = gql`
  query {
    info
  }
`
function MainLaunch() {
  return (
    <div>
      <h3>yo</h3>
    </div>
  )
}
export default function LaunchScreen() {
  const [cookies] = useCookies('accessToken')
  return (
    <div className={'main-div'}>

      <Query query={GET_MOVIES}>
        {({ loading, error, data }) => {
          if (loading) return <Progress />
          if (error) return <div>Error :(</div>
          console.log(JSON.stringify(cookies))
          if (cookies.accessToken) {
            console.log(cookies.accessToken)
            return (
              <Redirect to='/home' />
            )
          }
          return (
            <Login />
          )
        }}
      </Query>
    </div>
  )
}
