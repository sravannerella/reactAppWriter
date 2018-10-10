import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Auth} from './../providers/Auth/auth';

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        Auth.isAuthenticated === true ? <Component {...props} /> : <Redirect to='/' />
    )} />
);