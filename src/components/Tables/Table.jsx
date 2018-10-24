import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
    dataField: 'country',
    text: 'Country',
    sort: true
}, {
    dataField: 'count',
    text: 'Count',
    sort: true
}, {
    dataField: 'device',
    text: 'Device',
    sort: true
}];

const products = [
    {country: "United States", device: "Mobile Phone", count: 1123}, 
    {country: "United Kingdom", device: "Mobile Phone", count: 1}, 
    {country: "Canada", device: "Mobile Phone", count: 2}, 
    {country: "Brazil", device: "Mobile Phone", count: 3}
];

const defaultSorted = [{
    dataField: 'count',
    order: 'asc'
}];

export default class Table extends Component {
    render() {
        return (
            <BootstrapTable
                bootstrap4
                keyField="count"
                data={products}
                columns={columns}
                defaultSorted={defaultSorted}
            />
        );
    }
}