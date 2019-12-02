import React, { Component } from 'react'
import { postRegisterPortfolio } from '../../UserFunctions';
import Form from 'react-bootstrap/Form'
import {Button} from '@material-ui/core'

class License extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            company: '',
            start_date: '',
            end_date: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        postRegisterPortfolio(this.state.name,this.state.company,this.state.start_date,this.state.end_date,this.state.description);
        setTimeout(() => window.location.href = 'localhost:3000/profile', 1200);
    }

    render() {
        return (
            <Form>
                <h4>Add License</h4>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>License Name</Form.Label>
                    <Form.Control required type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Company</Form.Label>
                    <Form.Control required type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control required type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>End Date</Form.Label>
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

export default License