import {Route, Redirect} from 'react-router-dom';
import { Auth } from '../providers/Auth/auth';
import React from 'react';

export const LoginRouter = ({component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Auth.isAuthenticated === false ? <Component {...props} /> : <Redirect to="/home/analytics"/>
    )}></Route>
);