import React, {Component} from 'react';
import './../../style.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Test from '../../../components/Test/test';

export default class Home extends Component{

    render(){
        return(
            <div>
                <Header></Header>
                <Link to="/home1">BEST</Link>
                <Router>
                    <Switch>
                        <Route exact path="/home" component={() => <Test text="test"/>}></Route>
                        <Route exact path="/home1" component={() => <Test text="BEST"/>}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }

}