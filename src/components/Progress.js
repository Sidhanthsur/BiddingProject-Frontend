import React from 'react'
import './styles/Progress.css'
import CircularProgress from '@material-ui/core/CircularProgress'

export default class Progress extends React.Component {
    render () {
        return (
            <div className='progress-main'>
            <CircularProgress
                size={64} />
                
            </div>
        )
    }
}