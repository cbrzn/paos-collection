import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableFooter,
    TablePagination,
} from '@material-ui/core';
import PaginationActions from './paginationActions';
import PropTypes from 'prop-types';

class _Table extends Component {

    state = {
        items: [],
        keys: [],
        currentPage: 0,
        count: 0,
        rowsPerPage: 5,
    }

    componentWillReceiveProps(nextProps) {
        let { tableFormat, items } = nextProps;
        let count = items.length;
        
        this.setState({
            keys: tableFormat,
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
                            ActionsComponent={PaginationActions}
                        />                                     
                    </TableRow>
                </TableFooter>
            </Table>
        )
    }
}

_Table.propTypes = {
    tableFormat: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
}

export default _Table;