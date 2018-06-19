import React from 'react';
import Table from '../../components/table';

const tableFormat = [{
    name: 'Order',
    numeric: false
}, {
    name: 'Date',
    numeric: true
}, {
    name: 'Total',
    numeric: true
}, {
    name: 'Status',
    numeric: true
}];

const orders = [{
    order: 'asd',
    date:'ayer',
    total:123,
    status: 'pendiente',
}, {
    order: 'asd',
    date: 'ayer',
    total: 123,
    status: 'pendiente',
},{
    order: 'asd',
    date: 'ayer',
    total: 123,
    status: 'pendiente',
},{
    order: 'asd',
    date:'ayer',
    total:123,
    status: 'pendiente',
}]

function UserOrders () {

    return (
        <div>
            <Table
                items={orders}
                tableFormat={tableFormat}
            />
        </div>
    );
}

export default UserOrders;