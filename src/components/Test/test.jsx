import React, {Component} from 'react';

export default class Test extends Component{
    render(){
        return(
            <div className="shadow h-400 p-3">
                <h1 className="text-center">{this.props.text}</h1>
            </div>
        );
    }
}