import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './../style.css';
import './404.css';

export default class PageNotFound extends Component{
    render(){
        return(
            <div className="d-flex align-items-center justify-content-center h-100vh">
                <div className="w-400 h-400 shadow p-5">
                    <h1 className="text-center text-danger">ERROR</h1>
                    <h1 className="text-center text-danger">404</h1>
                    <h3 className="text-center mt-5">Page Not Found</h3>
                    <div className="mt-5">
                        <Link to="/" className="btn w-100 btn-outline-primary text-uppercase">Click Here to Go HOME</Link>
                    </div>
                </div>
            </div>
        );
    }
}