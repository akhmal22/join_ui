import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form'
import { Button, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { putEditUser } from '../UserFunctions';
import Skill from './EditProfile/Skill'


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
}));

class Editprofile extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            uname: '',
            phone: '',
            addr: '',
            email: '',
            passwd: '',
            org: '',
            pos: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        putEditUser(this.state.fname,this.state.uname,this.state.phone,
                    this.state.addr,this.state.email,this.state.passwd,
                    this.state.org,this.state.pos)
        setTimeout(() => window.location.href('localhost:3000/'), 1200);
    }

    render() {

        return (
            <Form style={{marginTop: '5%',marginBottom: '15%', marginLeft: '15%', marginRight: '15%'}}>
                <h3 style={{marginLeft: '40%', paddingBottom: '20px', fontWeight: 'bold'}}>Edit Profile</h3>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control required type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control required type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control required type="textarea" rows="3" placeholder="" />
                </Form.Group>

                <div>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Skills</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Skill/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br/>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>License</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br/>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Experience</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br/>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Portfolio</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br/>
                </div>
                
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

export default Editprofile