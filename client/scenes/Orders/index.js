import React, { Component } from 'react';
import {
    Grid,
    Paper,
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { Table } from '../../components';
import styles from './styles';

const tableFormat = [
    {
        name: 'Order',
        numeric: true
    }, {
        name: 'Username',
        numeric: false,
    }, {
        name: 'No se que dice',
        numeric: false,
    }, {
        name: 'Status',
        numeric: false,
    }, {
        name: 'Total',
        numeric: true,
    }, {
        name: 'Details',
        numeric: false,
    }
];

class Orders extends Component {

    state = {
        items: [],
        currentPage: 0,
        count: 0,
        rowsPerPage: 5,
    }

    componentDidMount() {
        let { items } = this.props;
        this.setState({
            items: items,
            count: items.length,
        });
    }

    handleChangePage = (event, page) => this.setState({ currentPage: page });
    handleChangeRowsPerPage = (event) => this.setState({ rowsPerPage: event.target.value });

    render() {
        const { classes } = this.props;
        const { currentPage, items, rowsPerPage, count } = this.state;

        return (
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid item lg={8} md={8} sm={8} xs={8}>
                        <Paper className={classes.paper}>
                            <Table
                                items={items}
                                tableFormat={tableFormat}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Orders);