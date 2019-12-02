import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { postLogoutUser } from '../UserFunctions';
import { NavbarHandler } from './NavbarHandler';

class Landing extends Component {
    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefult();
    }
    render() {

        return(
            <NavbarHandler/>
        )
    }
}

export default withRouter(Landing)