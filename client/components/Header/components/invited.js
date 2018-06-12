import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { TypographyLink } from '../../Links';
import { Typography } from '@material-ui/core';
import styles from './Styles/invited';

function Options ({ classes }) {

    return (
        <div className={classes.root}>
            <TypographyLink className={classes.link} to="/login" title="LOGIN" />
            <Typography color="inherit" variant="body2" className={classes.or}> or </Typography>
            <TypographyLink className={classes.link} to="/" title="SIGN UP" />
        </div>
    )
}

export default withStyles(styles)(Options)