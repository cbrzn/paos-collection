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
    constructor(props) {
        super(props);

        this.state = {
            keys: this.props.tableFormat,
            rowProps: this.props.rowProps,
            currentPage: 0,
            count: 0,
            rowsPerPage: 5,
        }
    }

    handleChangePage = (event,page) => this.setState({currentPage: page});
    handleChangeRowsPerPage = (event) => this.setState({rowsPerPage: event.target.value});

    renderKeys() {
        const { keys } = this.state;

        return keys.map(key => (
            <TableCell
                key={key.name}
                numeric={key.numeric}
            > {key.name}
            </TableCell>
        ));
    }
    renderRows(items) {
        const { keys, rowProps, currentPage, rowsPerPage } = this.state;
    
        return items.slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
            .map((item, i) => (
                <TableRow key={i}
                    { ...(rowProps.onClick ? { 
                        ...rowProps, 
                        onClick: () => {
                            rowProps.onClick(item);
                        },
                    }:{ ...rowProps })}
                >
                    {keys.map((key, j) => {
                        const { component: Component } = key;
                        if(Component) {
                            return <TableCell
                                    key={`${i}${j}`}
                                    numeric={key.numeric}
                                >
                                    <Component />
                                </TableCell>
                        } else {
                            return (
                                <TableCell
                                    key={`${i}${j}`}
                                    numeric={key.numeric}
                                > {item[key.name.toLowerCase()]}
                                </TableCell>
                            );
                        }                        
                    })}
                </TableRow>
            ));
    }
    render() {
        const { classes, items } = this.props;
        const { count, rowsPerPage, currentPage } = this.state;

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        {this.renderKeys()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.renderRows(items)}
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
    rowProps: PropTypes.object,
}

_Table.defaultProps = {
    rowProps: {},
}

export default _Table;