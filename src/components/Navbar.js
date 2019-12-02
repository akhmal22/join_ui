import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { LoggedSearchAppBar } from './LoggedSearchAppBar'
import { LoginSearchAppBar } from './LoginSearchAppBar'

class Landing extends Component {
    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefult();
    }
    render() {
        const loginRegLink = (
            <LoginSearchAppBar/>
        )

        const loggedLink = (
            <LoggedSearchAppBar/>
        )

        return(
            <div>
                {localStorage.getItem('access_token') ? loggedLink : loginRegLink}
            </div>
        )
    }
}

export default withRouter(Landing)