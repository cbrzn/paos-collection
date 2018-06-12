import React from 'react';
import { withStyles } from '@material-ui/core/styles'
// import { TypographyLink } from '../Links';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
})

function Options({ classes }) {

    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default withStyles(styles)(Options)