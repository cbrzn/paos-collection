import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    Paper,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Table } from '../../components';
import styles from './styles';

const tableFormat = [
    {
        name: 'Order',
        numeric: false
    }, {
        name: 'Username',
        numeric: false,
    }, {
        name: 'Date',
        numeric: true,
    }, {
        name: 'Status',
        numeric: true,
    }, {
        name: 'Total',
        numeric: true,
    }, 
    // {
    //     name: 'Details',
    //     numeric: false,
    // }
];

class Orders extends Component {

    state = {
        orders: [],
        currentPage: 0,
        count: 0,
        rowsPerPage: 5,
    }

    componentDidMount() {
        let { orders } = this.props;
        this.setState({
            orders: orders,
            count: orders.length,
        });
    }

    handleChangePage = (event, page) => this.setState({ currentPage: page });
    handleChangeRowsPerPage = (event) => this.setState({ rowsPerPage: event.target.value });

    render() {
        const { classes } = this.props;
        const { currentPage, orders, rowsPerPage, count } = this.state;

        return (
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid item lg={8} md={8} sm={8} xs={8}>
                        <Paper className={classes.paper}>
                            <Table
                                items={orders}
                                tableFormat={tableFormat}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Orders.propTypes = {
    orders: PropTypes.array.isRequired,
};


export default withStyles(styles)(Orders);