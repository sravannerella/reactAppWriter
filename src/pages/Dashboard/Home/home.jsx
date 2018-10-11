import React, {Component} from 'react';
import './home.css';
import Header from '../../../components/Header/Header';
import SideMenu from '../../../components/SideMenu/Sidemenu';
import Analytics from '../Analytics/Analytics';
import Users from '../Users/Users';
import { PrivateRoute } from '../../../router/PrivateRouter';
// import {Redirect} from 'react-router-dom';
import Datasets from '../Datasets/Datasets';
import Settings from '../Settings/Settings';

export default class Home extends Component{

    render(){
        return(
            <div>
                <Header></Header>
                <div className="d-flex">
                    <SideMenu></SideMenu>
                    <PrivateRoute exact path='/home/analytics' component={Analytics} />
                    <PrivateRoute exact path='/home/users' component={Users} />
                    <PrivateRoute exact path='/home/datasets' component={Datasets} />
                    <PrivateRoute exact path='/home/settings' component={Settings} />
                    {/* <Redirect to='/home/analytics' /> */}
                </div>
            </div>
        );
    }

}