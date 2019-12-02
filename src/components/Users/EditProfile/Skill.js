import React, { Component } from 'react'
import { postRegisterSkill } from '../../UserFunctions';
import Form from 'react-bootstrap/Form'
import {Button} from '@material-ui/core'

class Skill extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            familiarity: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        postRegisterSkill(this.state.name, this.state.familiarity);
        setTimeout(() => window.location.href = 'localhost:3000/profile', 1200);
    }

    render() {
        return (
            <Form>
                <h4>Add Skill</h4>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Skill Name</Form.Label>
                    <Form.Control required type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Familiarity</Form.Label>
                    <Form.Control required type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="" />
                </Form.Group>
                <Button
                style={{margin: 5, background: "#E7E6E6",}}>
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

export default Skill