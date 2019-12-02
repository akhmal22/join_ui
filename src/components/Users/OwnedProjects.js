import React, { Component } from 'react';
import Addproject from '../CRUD/Projects/AddProject';
import MyProject from './Projects/MyProjects';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Button from '@material-ui/core/Button';
import { Menu, Grid} from '@material-ui/core/';

class Myproject extends Component {
    
    render() {
        return (
            <div>
                <h3 style={{paddingTop: 20}}>My Project</h3>
                <Grid
                    justify="flex-end"
                >
                    <PopupState variant="popover" popupId="demo-popup-menu">
                    {popup => (
                        <React.Fragment>
                        <Button 
                            style={{margin: 5, background: "#878787"}}
                            variant="contained" {...bindTrigger(popup)}>
                            Add project
                        </Button>
                        <Menu {...bindMenu(popup)}>
                            <Addproject/>
                        </Menu>
                        </React.Fragment>
                    )}
                    </PopupState>
                </Grid>
                <div><MyProject/></div>
            </div>
        )
    }
}

export default Myproject