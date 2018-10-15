import React, {Component} from 'react';

export default class Analytics extends Component{

    render(){
        return(
            <div className="w-100">
                <div className="mx-4 mb-5">
                    <h1>Dashboard</h1>
                    <p className="font-20">Overview</p>
                </div>

                <div className="bg-light">
                    <div className="container d-flex flex-wrap">
                        <div className="rounded shadow-sm col mx-2 my-3 bg-white">
                            <div className="py-3 px-3">
                                <p>Active Users</p>
                            </div>
                        </div>

                        <div className="rounded shadow-sm col mx-2 my-3 bg-primary">
                            <div className="py-3 px-3">
                                <p className="text-white">Sales</p>
                            </div>
                        </div>

                        <div className="rounded shadow-sm col mx-2 my-3 bg-danger">
                            <div className="py-3 px-3">
                                <p className="text-white">Customers</p>
                            </div>
                        </div>

                        <div className="rounded shadow-sm col mx-2 my-3 bg-secondary">
                            <div className="py-3 px-3">
                                <p className="text-white">Workers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}