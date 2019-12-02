import React, { Component } from 'react'
import { Projects } from './Projects'

class TopProject extends Component{
    state = {
        projects: []
    }

    componentDidMount(){
        fetch('http://35.223.215.2:5000/projects')
        .then(res => res.json())
        .then((data) => {
            this.setState({projects: data})
        })
        .catch(console.log)
    }
    render(){
        return(
            <Projects projects={this.state.projects} />
        )
    }
}

export default TopProject
