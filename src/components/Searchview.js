import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { LoggedSearchAppBar } from './Navbar/LoggedSearchAppBar'
import './Searchview.css'
import Availableproject from './Availableproject'
import Searchfield from './Searchfield';


class Searchview extends Component {

    render() {
        const loggedLink = (
            <LoggedSearchAppBar />
        )

        return (
            <div className="pd-left pd-right">
                <Searchfield/>
                <Availableproject/>
            </div>
        )
    }

}

export default withRouter(Searchview)
