import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from '@material-ui/core';
import { deleteRemove } from './CRUDFoo';
import { Link } from 'react-router-dom';

class DeleteProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            confirm: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event){
        const {id} = this.props.match.params;
        event.preventDefault();
        deleteRemove(id);
    }

    render(){
        return (
            <Form style={{margin: '5%'}}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Type 'CONFIRM' to Delete</Form.Label>
                    <Form.Control name="confirm" onChange={this.handleChange} type="text" placeholder="" required/>
                </Form.Group>
                <Button
                style={{margin: 5, background: "#E7E6E6",}}
                component={ Link } to={{pathname: '/myproject'}}
                >
                    Cancel
                </Button>
                <Button
                style={{margin: 5, background: "#E7E6E6",}}
                onClick={this.handleSubmit}
                >
                    Confirm
                </Button>
            </Form>
        )
    }
}

export default DeleteProject;