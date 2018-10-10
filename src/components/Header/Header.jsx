import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

export default class Header extends Component{

    render(){
        return(
            <nav className="navbar navbar-light">
                <Link to="/home" className="navbar-brand text-muted">
                    <img src={logo} className="d-inline-block align-top img-30 ml-2 mr-3" alt="Logo"/>
                    Neutron
                </Link>
                
                <div className="navbar-brand">
                    <div className="rounded-circle img-30 bg-info text-center text-white">
                        S
                    </div>
                </div>
            </nav>
        );
    }

}