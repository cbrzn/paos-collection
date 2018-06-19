import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    Paper,
    Divider,
    Typography
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import styles from './styles';

class Account extends Component {

    componentDidMount() {

    }
    render() {
        const { classes } = this.props;

        return (
            <Grid container justify="center">
                <Grid item lg={11}>
                    <Paper className={classes.paper}>
                        <div className={classes.header}>
                            <AccountCircle />                            
                        </div>
                        <Divider />    
                        <Grid container className={classes.body}>
                            <Grid item lg={6}>

                            </Grid>
                            <Grid item lg={6}>

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>                    
            </Grid>
        );
    }
}

export default withStyles(styles)(Account)