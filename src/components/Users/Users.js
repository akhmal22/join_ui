import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { typography } from '@material-ui/system';

// GET request method in ./Get
export const Users = ({ users }) => {
  return (
    <div>
      {users.map(user => user.username === localStorage.getItem('username') ? (
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
                      {user.username}
                    </Typography>
                    <Typography
                      variant="h4"
                      style={{color: '#FFFFFF'}}occupation
                    >
                      <div>
                        <strong>{user.position}</strong>
                      </div>
                      <div>
                        {user.organization}
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
              <Button variant="contained">
                Edit Profile
              </Button>
              <br/><br/><br/>
              <Typography variant='h4'>
                <strong>Education</strong>
                <p>{user.education}</p>
              </Typography>
              <br/>
              <Typography variant='h4'>
                <strong>Experience</strong>
                <p>{user.profiles.experience}</p>
              </Typography>
              <br/>
              <Typography variant='h4'>
                <strong>Skills</strong>
                <p>{user.profiles.skills}</p>
              </Typography>
            </Grid>
            <Grid style={{margin: '5%'}}>
              <Button style={{margin: '5px', backgroundColor: 'grey', color: 'white'}} variant="contained">My Project</Button>
              <Button style={{margin: '5px', backgroundColor: 'red', color: 'white'}} variant="contained">Messages</Button>
              <br/><br/><br/>
              <Typography variant='h4'>
                <strong>Has been member since</strong>
                <p>{user.date_created}</p>
              </Typography>
              <br/>
              <Typography variant='h4'>
                <strong>Connections</strong>
                <p>{user.connection}</p>
              </Typography>
              <br/>
              <Typography variant='h4'>
                <strong>Project involved</strong>
                <p>{user.project}</p>
              </Typography>
            </Grid>
          </Grid>
        </div>
      ) : (null)
      )}
    </div>
  )
};