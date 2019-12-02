import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import Login from '../Login';
import Register from '../Register';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function LoginSearchAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#C4C4C4'}}>
        <Toolbar>
          <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start"
          >
            <PopupState variant="popover" popupId="demo-popup-menu">
              {popup => (
                <React.Fragment>
                  <Button 
                    style={{margin: 5, background: "#A6A5F1"}}
                    variant="contained" {...bindTrigger(popup)}>
                    Sign In
                  </Button>
                  <Menu {...bindMenu(popup)}>
                    <Login/>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {popupState => (
                <React.Fragment>
                  <Button 
                   style={{margin: 5, background: "#F14646"}} 
                   variant="contained" {...bindTrigger(popupState)}>
                    Sign Up
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <Register/>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
