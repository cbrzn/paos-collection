import React, { Component } from 'react';
import {
    withStyles,
    Grid,
    Paper,
    Button,
    Modal,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Table } from '../../components';
import styles from './styles';
import cartTable from '../../constants/cartTable';
import PaymentForm from '../../components/PaymentForm'

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
}

class Cart extends Component {
    state = {
        items: [],
        currentPage: 0,
        count: 0,
        rowsPerPage: 5,
        open: false
    }

    componentDidMount() {
        fetch('/cart/show', {
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            switch(data.status) {
                case 200:
                    this.setState({
                        items: data.carts,
                        count: data.carts.length, 
                    })
                break
                case 403:
                    alert('you must login')
                    this.props.history.push('/login')
                break
                case 500:
                    alert('an error has ocurred')
                break
            }
        })
    }

    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    handleChangePage = (event,page) => this.setState({currentPage: page});
    handleChangeRowsPerPage = (event) => this.setState({rowsPerPage: event.target.value});
    handlePay = () => {
        console.log('Payment')
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
                                onClick={this.handleOpen}
                            > Pay
                            </Button>
                        </div>
                    </Grid>
                    
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                        >
                        <div style={getModalStyle()} className={classes.modal}>
                            <PaymentForm />
                        </div>
                    </Modal>
                </Grid>
            </div> 
        )
    }
}
const SimpleModalWrapped = withStyles(styles)(Cart)

export default withStyles(styles)(Cart);