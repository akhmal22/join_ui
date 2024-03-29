import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Searchview.css'
import {Available} from './Available';

//function 

class Searchview extends Component {
    state = {
        projects: []
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch('http://35.223.215.2:5000/projects')
        .then(res => res.json())
        .then(data => {
            for(var props in data){
                if(data[props].name!==id){
                    delete data[props]
                }
                this.setState({projects: data})
            }
        })
        .catch(console.log)
    }

    render() {
        return (
            <Available projects={this.state.projects}/>
        )
    }

}

export default withRouter(Searchview)
