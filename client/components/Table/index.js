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
import PaginationActions from '../../paginationActions';

class MyTable extends Component {

    state = {
        items: [],
        keys: [],
        currentPage: 0,
        count: 0,
        rowsPerPage: 5,
    }

    componentWillReceiveProps(nextProps) {

        let { keys, items } = nextProps;
        let count = items.length;
        console.log(items)
        this.setState({
            keys: keys,
            items: items,
            count: count, 
        });
    }

    handleChangePage = (event,page) => this.setState({currentPage: page});
    handleChangeRowsPerPage = (event) => this.setState({rowsPerPage: event.target.value});

    render() {
        const { classes } = this.props;
        const { currentPage, items, keys, rowsPerPage, count } = this.state; 

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        {keys.map(key => (
                            <TableCell 
                                key={key.name} 
                                numeric={key.numeric}
                            > {key.name}
                            </TableCell>
                        ))}                                    
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        items.slice(currentPage*rowsPerPage,currentPage*rowsPerPage+rowsPerPage)
                        .map(item => (                                        
                            <TableRow key={item.id}>
                                {keys.map((key,i) => (
                                    <TableCell 
                                        numeric={key.numeric}
                                        key={i}
                                    > {item[key.name.toLowerCase()]} 
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            colSpan={5}
                            count={count}
                            rowsPerPage={rowsPerPage}
                            page={currentPage}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />                                     
                    </TableRow>
                </TableFooter>
            </Table>
        )
    }
} 

export default MyTable;