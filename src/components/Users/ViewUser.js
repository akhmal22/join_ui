import React, { Component } from 'react'
import { Users } from './Users'

class ViewUser extends Component{
    state = {
        users: []
    }

    componentDidMount(){
        fetch('http://35.223.215.2:5000/users',{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({users: data})
        })
        .catch(console.log)
    }
    render(){
        return(
            <Users users={this.state.users} />
        )
    }
}

export default ViewUser
