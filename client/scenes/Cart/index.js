import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    Grid,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableFooter,
    TablePagination,
} from '@material-ui/core';
import styles from './styles';
import { Table } from '../../components';

class Cart extends Component {

    state = {
        items: [],
        currentPage: 0,
        count: 0,
        rowsPerPage: 5,
    }

    componentDidMount() {
        let { items } = this.props;
        let count = items.length;

        this.setState({
            items: items,
            count: count, 
        });
    }

    handleChangePage = (event,page) => this.setState({currentPage: page});
    handleChangeRowsPerPage = (event) => this.setState({rowsPerPage: event.target.value});

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
                                keys={[{name:'Product', numeric:false},{name:'Price',numeric:true},{name:'Quantity',numeric:true},{name:'Total',numeric:true}]}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div> 
        )
    }
}

export default withStyles(styles)(Cart);