import React, { Component } from 'react';
import {
    Grid,
    Paper,
    Button,
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { Table } from '../../components';
import styles from './styles';

const tableFormat = [
    {
        name: 'Product', 
        numeric: false
    },{ 
        name: 'Price',
        numeric: true
    },{
        name: 'Quantity', 
        numeric: true
    },{
        name: 'Total',
        numeric:true
    }
];

class Cart extends Component {

    state = {
        items: [],
        currentPage: 0,
        count: 0,
        rowsPerPage: 5,
    }

    componentDidMount() {
        let { items } = this.props;
        let totalItems = items.map(item => ({
            ...item,
            total: item.price*item.quantity,
        }));
        this.setState({
            items: totalItems,
            count: items.length, 
        });
    }

    handleChangePage = (event,page) => this.setState({currentPage: page});
    handleChangeRowsPerPage = (event) => this.setState({rowsPerPage: event.target.value});
    handlePay = () => {
        console.log('Payment');
    }

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
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div className={classes.actions}>
                            <Button
                                variant="raised"
                                color="primary"
                                onClick={this.handlePay}
                            > Pay
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div> 
        )
    }
}

export default withStyles(styles)(Cart);