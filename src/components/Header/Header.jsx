import React, {Component} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';
import './Header.css';
import logo from './logo.png';
import { Auth } from '../../providers/Auth/auth';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    signout(){
        Auth.signout( () => {
            console.log("Sign out", this.props);
            this.props.history.push('/');
        }, () => {
            console.log("Failed");
        });
    }

    toggle(){
        this.setState(state => ({
            dropdownOpen: !state.dropdownOpen
        }));
    }

    render(){
        return(
            <nav className="navbar navbar-light">
                <Link to="/home/analytics" className="navbar-brand text-muted">
                    <img src={logo} className="d-inline-block align-top img-30 ml-2 mr-3" alt="Logo"/>
                    Neutron
                </Link>
                
                <div className="navbar-brand">

                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction='down'>
                        <DropdownToggle className="rounded-circle img-40 bg-info text-center text-white border-0">
                            S
                        </DropdownToggle>
                        <DropdownMenu className="border-0 shadow rounded">
                            <DropdownItem className="py-2"><i className="fas fa-user mr-2 text-muted"></i>Profile</DropdownItem>
                            <DropdownItem className="py-2" onClick={this.signout.bind(this)}><i className="fas fa-sign-out-alt mr-2 text-muted"></i>Sign Out</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </div>
            </nav>
        );
    }

}

export default withRouter(Header);