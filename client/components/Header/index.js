import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
    AppBar,
    Typography,
    Toolbar,
} from '@material-ui/core';
import Options from './components';
import { withRouter } from 'react-router';
import { TypographyLink } from '../Links';
import styles from './styles';

function Header({ classes,user }) {

    return (
        <AppBar
            position="static"
        >
            <Toolbar style={{justifyContent:'space-between'}}>
                <TypographyLink
                    variant="title"
                    to="/"
                    title="Pao's"
                    className={classes.title}
                />
                <Options user={{ type: 'invited' }} />
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object,
    // user: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);