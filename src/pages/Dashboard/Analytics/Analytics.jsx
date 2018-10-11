import React, {Component} from 'react';

export default class Analytics extends Component{

    componentDidMount(){
        console.log("MOUNTED");
    }

    render(){
        return(
            <div className="ml-4">
                <h1>Dashboard</h1>
                <p>Let's start</p>
            </div>
        )
    }
}