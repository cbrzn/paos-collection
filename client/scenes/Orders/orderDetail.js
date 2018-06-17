import React from 'react'
import {
    withStyles,
    Paper,
    Typography,
} from '@material-ui/core';
import styles from './Styles/orderDetail';

const OrderDetail = ({ classes, data }) => (
    <Paper className={classes.paper}>
        <Typography
            variant="title"            
        > {data.username} 
        </Typography>
    </Paper>
)

export default withStyles(styles)(OrderDetail)