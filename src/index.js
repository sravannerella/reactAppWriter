import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/Login/Login.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './pages/Signup/signup';
import PageNotFound from './pages/404/404';
import Home from './pages/Dashboard/Home/home';
import Test from './components/Test/test';
import { PrivateRoute } from './router/PrivateRouter';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
            <PrivateRoute exact path="/home1" component={ () => <Test text="Private" /> }></PrivateRoute>
            <Route component={PageNotFound}></Route>
        </Switch>
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
