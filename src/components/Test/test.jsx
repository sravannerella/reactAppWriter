import React, {Component} from 'react';

export default class Test extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }

    render(){
        return(
            <h1>{this.props.text}</h1>
        );
    }
}