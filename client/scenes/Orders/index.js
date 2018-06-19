import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    Paper,
    Button,
    Slide,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Table } from '../../components';
import styles from './Styles/orders';
import OrderDetail from './orderDetail';
import ordersTable from '../../constants/ordersTable';

class Orders extends Component {

    state = {
        orders: [],
        currentPage: 0,
        count: 0,
        rowsPerPage: 5,
        sizes: {
            lg: 8,
            md: 8,
            sm: 8,
            xs: 8,
        },
        expanded: false,
    }

    componentDidMount() {
        fetch('./order/all')
        .then(response => response.json())
        .then(data => {
            this.setState({
                orders: data.orders,
                count: data.orders.length,
            });    
        })
    }

    handleChangePage = (event, page) => this.setState({ currentPage: page });
    handleChangeRowsPerPage = (event) => this.setState({ rowsPerPage: event.target.value });
    handleRowClick = (order) => {
        this.setState({
            expanded: true,
            sizes: {                
                lg: 6,
                md: 8,
                sm: 8,
                xs: 8,
            },
            actualOrder: order,
        })
    }

    render() {
        const { classes } = this.props;
        const { orders, sizes, expanded } = this.state;

        return (
            <div className={classes.root}>
                <Grid container justify="space-around">
                    <Grid item {...sizes}>
                        <Paper className={classes.paper}>
                            <Table
                                items={orders}
                                tableFormat={ordersTable}
                                rowProps={{
                                    hover: true,
                                    role: 'checkbox',
                                    onClick: this.handleRowClick,
                                }}
                            />
                        </Paper>
                    </Grid>
                    {
                        expanded ? (
                            <Grid item lg={4}>
                                <Slide direction="left" in={expanded} mountOnEnter unMountOnExit>
                                    <OrderDetail 
                                        data={this.state.actualOrder}                                    
                                    />
                                </Slide>
                            </Grid>
                        ) : (
                            null
                        )
                    }
                </Grid>
            </div>
        )
    }
}

Orders.propTypes = {
    classes: PropTypes.object,
    orders: PropTypes.array.isRequired,
};


export default withStyles(styles)(Orders);