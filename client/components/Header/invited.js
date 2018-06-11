import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { TypographyLink } from '../Links';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    or: {
        marginLeft: 10,
        marginRight: 10,
    }
})

function Options ({ classes }) {

    return (
        <div className={classes.root}>
            <TypographyLink to="/login" title="LOGIN" />
            <Typography color="inherit" variant="body2" className={classes.or}> or </Typography>
            <TypographyLink to="/" title="SIGN UP" />
        </div>
    )
}

export default withStyles(styles)(Options)