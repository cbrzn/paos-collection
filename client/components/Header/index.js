import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
    AppBar,
    Typography,
    Toolbar,
} from '@material-ui/core';
import Options from './options';
import { withRouter } from 'react-router';

const styles = () => ({
    nav: {

    },
});

function Header({ classes, user }) {

    return (
        <AppBar
            position="static"
            className={classes.nav}
        >
            <Toolbar style={{justifyContent:'space-between'}}>
                <Typography
                    variant="title"
                    color="inherit"                    
                >
                    LOGO
                </Typography>
                <Options user={{ type: 'invited' }} />
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object,
}

export default withRouter(withStyles(styles)(Header));