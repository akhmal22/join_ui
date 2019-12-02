import React, { Component } from 'react'
import {
    Paper,
    Typography,
    Avatar,
    Grid,
    Button
} from '@material-ui/core'
import {Link} from 'react-router-dom'

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
        };
    
    }

    
    componentDidMount(){
        const id = localStorage.getItem('user_id')
        fetch('http://35.223.215.2:5000/user/'+id)
        .then(res => res.json())
        .then((data) => {
            this.setState({users: data})
        })
        .catch(console.log)
    }
    render(){
        console.log(this.state.profiles)
        if(localStorage.getItem('user_id')!==null){
            return(
                <div className="container-full" >
                    <Paper
                        component="div"
                        style={{ background: '#000000'}}
                    >
                        <Typography 
                        variant="h2" 
                        align="center"
                        style={{ color: '#FFFFFF'}}
                        >
                        MY PROFILE
                        </Typography>
                        <Grid container direction="row">
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={require("./boy.png")} style={{height: '35vh', width: '35vh'}} />
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs={10} container direction="row" spacing={2}>
                            <Grid item xs>
                                <Typography
                                variant="h4" 
                                component="div" 
                                style={{ color: '#4DE076'}}
                                >
                                {this.state.username}
                                </Typography>
                                <Typography
                                variant="h4"
                                style={{color: '#FFFFFF'}}occupation
                                >
                                <div>
                                    <strong>{this.state.position}</strong>
                                </div>
                                <div>
                                    {this.state.organization}
                                </div>
                                </Typography>
                            </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Paper>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                    >
                        <Grid style={{margin: '5%'}}>
                        <Button variant="contained"
                            component={ Link } to={{pathname: '/profile/edit'}}
                        >
                            Edit Profile
                        </Button>
                        <br/><br/><br/>
                        <Typography variant='h4'>
                            <strong>Education</strong>
                            <p>{this.state.organization}</p>
                        </Typography>
                        <br/>
                        <Typography variant='h4'>
                            <strong>Experience</strong>
                            <p>this.state.users.profiles</p>
                        </Typography>
                        <br/>
                        <Typography variant='h4'>
                            <strong>Skills</strong>
                            <p>users.profiles.skills</p>
                        </Typography>
                        </Grid>
                        <Grid style={{margin: '5%'}}>
                        <Button style={{margin: '5px'}} variant="contained"
                        component={ Link } to={{pathname: '/myproject'}}>My Project</Button>
                        <Button style={{margin: '5px'}} variant="contained">Messages</Button>
                        <br/><br/><br/>
                        <Typography variant='h4'>
                            <strong>Has been member since</strong>
                            <p>{this.state.date_created}</p>
                        </Typography>
                        <br/>
                        <Typography variant='h4'>
                            <strong>Project involved</strong>
                            <p>{this.state.num_projects}</p>
                        </Typography>
                        </Grid>
                    </Grid>
                </div>
            )
        }else{
            return (
                <div>
                    <h1>ERROR 401</h1>
                    <Link to="/">You must login first</Link>
                </div>
                
            )
        }
        
    }
}

export default Profile
