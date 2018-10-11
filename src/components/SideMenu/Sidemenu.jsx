import React, { Component } from 'react';
import './Sidemenu.css';
import { Link } from 'react-router-dom';

export default class SideMenu extends Component {

    path = '';

    constructor(props){
        super(props);
        let path = window.location.pathname;
        let paths = path.split('/');
        console.log(paths[2]);
        path = paths[2];
        this.deselectAll = this.deselectAll.bind(this);
    }

    deselectAll(){
        let elements = document.getElementById('sidebar').children;
        elements = Array.from(elements);
        elements.map((item) => {
            item.children[0].classList.remove('active');
            return item;
        });
    }

    isSelected(e) {
        this.deselectAll();
        e.target.classList.add('active');
    }

    render() {
        return (
            <div className="w-250 bg-light h-100vh">
                <ul id="sidebar" className="sidebar-nav p-0">
                    <Link to='/home/analytics'>
                        <li className="py-3 px-4" onClick={this.isSelected.bind(this)}>
                            <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
                        </li>
                    </Link>
                    <Link to='/home/datasets'>
                        <li className="py-3 px-4" onClick={this.isSelected.bind(this)}>
                            <i className="fas fa-archive mr-3"></i> Datasets
                        </li>
                    </Link>
                    <Link to='/home/users'>
                        <li className="py-3 px-4" onClick={this.isSelected.bind(this)}>
                            <i className="fas fa-users mr-3"></i> Users
                        </li>
                    </Link>
                    <Link to='/home/settings'>
                        <li className="py-3 px-4" onClick={this.isSelected.bind(this)}>
                            <i className="fas fa-cogs mr-3"></i> Settings
                        </li>
                    </Link>
                </ul>
            </div>
        );
    }
}