import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    Paper,
    Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Table } from '../../components';
import styles from './styles';
import cartTable from '../../constants/cartTable';


class Cart extends Component {

    state = {
        items: [],
        currentPage: 0,
        count: 0,
        rowsPerPage: 5,
    }

    componentDidMount() {
        fetch('/cart/show/6').then(response => response.json())
            .then(items => {
                console.log(items)
            this.setState({
                items: items.carts,
                count: items.carts.length, 
            });
        })
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
                                tableFormat={cartTable}
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

Cart.propTypes = {
    items: PropTypes.array.isRequired,
};

export default withStyles(styles)(Cart);