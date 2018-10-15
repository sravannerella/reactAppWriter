import React, { Component } from 'react';
import './Sidemenu.css';
import { Link } from 'react-router-dom';

export default class SideMenu extends Component {

    path = '';

    constructor(props){
        super(props);
        this.state = {
            store: props.store,
            isSidebarOpen: 0
        }
        this.deselectAll = this.deselectAll.bind(this);
    }

    componentWillReceiveProps(){
        this.setState({
            isSidebarOpen: this.props.store.getState()
        });
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
        e.currentTarget.children[0].classList.add('active');
    }

    render() {
        return (
            <div className={ this.state.isSidebarOpen ? "w-250 bg-light h-100vh min-w-250" : "w-75px bg-light h-100vh d-xs-none"}>
                <ul id="sidebar" className="sidebar-nav p-0">
                    <Link to='/home/analytics' onClick={this.isSelected.bind(this)}>
                        <li className="py-3 px-4">
                            <i className="fas fa-tachometer-alt mr-3"></i> <span className={this.state.isSidebarOpen === 0 ? "hide-on-small" : ''}>Dashboard</span>
                        </li>
                    </Link>
                    <Link to='/home/datasets' onClick={this.isSelected.bind(this)}>
                        <li className="py-3 px-4">
                            <i className="fas fa-archive mr-3"></i> <span className={this.state.isSidebarOpen === 0 ? "hide-on-small" : ''}>Datasets</span>
                        </li>
                    </Link>
                    <Link to='/home/users' onClick={this.isSelected.bind(this)}>
                        <li className="py-3 px-4">
                            <i className="fas fa-users mr-3"></i> <span className={this.state.isSidebarOpen === 0 ? "hide-on-small" : ''}>Users</span>
                        </li>
                    </Link>
                    <Link to='/home/settings' onClick={this.isSelected.bind(this)}>
                        <li className="py-3 px-4">
                            <i className="fas fa-cogs mr-3"></i> <span className={this.state.isSidebarOpen === 0 ? "hide-on-small" : ''}>Settings</span>
                        </li>
                    </Link>
                </ul>
            </div>
        );
    }
}