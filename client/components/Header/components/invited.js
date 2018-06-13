import React from 'react';
import { 
    withStyles,
    Typography, 
} from '@material-ui/core';
import TypographyLink from '../../TypographyLink';

import styles from './Styles/invited';

function Options ({ classes }) {

    return (
        <div className={classes.root}>
            <TypographyLink className={classes.link} to="/login" title="LOGIN" />
            <Typography color="inherit" variant="body2" className={classes.or}> or </Typography>
            <TypographyLink className={classes.link} to="/signup" title="SIGN UP" />
        </div>
    )
}

export default withStyles(styles)(Options)