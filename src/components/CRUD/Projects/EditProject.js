import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from '@material-ui/core';
import { putEdit } from './CRUDFoo';


class EditProject extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: null,
            desc: null,
            type: null,
            due_date: null,
            req_collab: null,
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
        putEdit(this.state.name,this.state.desc,this.state.type,this.state.due_date,this.state.req_collab,id)
    }

    render() {
        return (
            <Form style={{margin: '5%'}}>
                <h3>Edit Project</h3>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control name="name" onChange={this.handleChange} type="text" placeholder="" required/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control name="desc" onChange={this.handleChange} type="text" as="textarea" row="3" placeholder="Text here..." required/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Project Type</Form.Label>
                    <Form.Control name="type" onChange={this.handleChange} type="text" placeholder="" required/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Collaborator</Form.Label>
                    <Form.Control name="req_collab" onChange={this.handleChange} type="number" placeholder="" min="1" max="20"required/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Project duration</Form.Label>
                    <Form.Control name="due_date" onChange={this.handleChange} type="text" placeholder="dd/mm/yy" required/>
                </Form.Group>
                <Button
                style={{margin: 5, background: "#E7E6E6",}}
                onClick={this.handleCancel}
                >
                Cancel
                </Button>
                <Button 
                style={{margin: 5, background: "#EF5D5D"}}
                onClick={this.handleSubmit}
                >
                Finish
                </Button>
            </Form>
        )
    }
}

export default EditProject