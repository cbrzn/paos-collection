import React from 'react'
import {
    withStyles,
    Paper,
    Typography,
} from '@material-ui/core';
import styles from './Styles/orderDetail';

const OrderDetail = ({ classes, data }) => (
    <Paper className={classes.paper}>
        <div className={classes.root}>
            <div className={classes.row}>
                <Typography
                    className={classes.key}
                    variant="headline"
                > Order ID: </Typography>
                <Typography>{data.order}</Typography>
            </div>
            <Row 
                classes={classes}
                title="Client name:"
                value={data.name}
            />
            <Row
                classes={classes}
                title="Date:"
                value={data.date}
            />
            <Row
                classes={classes}
                title="Total:"
                value={data.total}
            />
            <Row
                classes={classes}
                title="Status:"
                value={data.status}
            />
            <Row
                classes={classes}
                title="Payment form...?:"
            />
        </div>
    </Paper>
);

const Row = ({ classes, title, value }) => (
    <div className={classes.row}>
        <Typography
            className={classes.key}
            variant="headline"
        > {title} </Typography>
        <Typography>{value}</Typography>
    </div>
);

export default withStyles(styles)(OrderDetail)