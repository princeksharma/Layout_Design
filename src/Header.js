import React from 'react';
import {AppBar, Typography, Toolbar} from '@material-ui/core';

import './Header.css';

const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4">Layout Design</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                <Typography variant="h6" className="menu">Home</Typography>&nbsp;&nbsp;
                <Typography variant="h6" className="menu">About</Typography>&nbsp;&nbsp;
                <Typography variant="h6" className="menu">Contact</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
