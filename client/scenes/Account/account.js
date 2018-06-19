import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    Paper,
    Divider,
    Typography
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import styles from './Styles/account';
import OptionList from './optionList';
import Settings from './settings';

class Account extends Component {

    state = {
        component: () => <Settings />,
    }

    handleOptionClick = (Component) => () => {
        this.setState({ component: () => <Component />})
    }

    render() {
        const { classes } = this.props;
        const { component: Component } = this.state;

        return (
            <Grid container justify="center">
                <Grid item lg={11}>
                    <Paper className={classes.paper}>
                        <div className={classes.header}>
                            <AccountCircle />                            
                        </div>
                        <Divider />    
                        <Grid container className={classes.body}>
                            <Grid item lg={3}>
                                <OptionList 
                                    handleClick={this.handleOptionClick}
                                />
                            </Grid>
                            <Grid item lg={9}>
                                <Component />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>                    
            </Grid>
        );
    }
}

export default withStyles(styles)(Account)