import React, { Fragment } from 'react';
import {
    withStyles,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import UserOrders from './userOrders';
import Settings from './settings';

const styles = theme => ({
    
});

function OptionList ({ classes, handleClick }) {

    return (
        <Fragment>
            <List component="nav">
                <ListItem button
                    onClick={handleClick(Settings)}
                >
                    <ListItemText 
                        primary="Settings"
                    />
                </ListItem>
                <ListItem button
                    onClick={handleClick(UserOrders)}    
                >
                    <ListItemText 
                        primary="Orders"
                    />
                </ListItem>
            </List>
        </Fragment>
    );
}

OptionList.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default withStyles(styles)(OptionList)