import React, {Component} from 'react';
import LinesGraph from '../../../components/Charts/Line/Line';
import Table from '../../../components/Tables/Table';

export default class Analytics extends Component{

    render(){
        return(
            <div className="w-100 h-100vh overflow-scroll">
                <div className="mx-4 mb-3 mt-2">
                    <h1>Dashboard</h1>
                    <p className="font-20">Overview</p>
                </div>

                <div className="bg-light py-3">
                    <div className="d-flex flex-wrap">
                        <div className="rounded shadow-sm mx-2 my-3 bg-warning flex-grow-1">
                            <div className="p-3">
                                <p className="text-white text-center">Active Users</p>
                                <LinesGraph></LinesGraph>
                            </div>
                        </div>

                        <div className="rounded shadow-sm mx-2 my-3 bg-primary flex-grow-1">
                            <div className="p-3">
                                <p className="text-white text-center">Sales</p>
                                <LinesGraph></LinesGraph>
                            </div>
                        </div>

                        <div className="rounded shadow-sm mx-2 my-3 bg-danger flex-grow-1">
                            <div className="p-3">
                                <p className="text-white text-center">Customers</p>
                                <LinesGraph></LinesGraph>
                            </div>
                        </div>

                        <div className="rounded shadow-sm mx-2 my-3 bg-success flex-grow-1">
                            <div className="p-3">
                                <p className="text-white text-center">Workers</p>
                                <LinesGraph></LinesGraph>
                            </div>
                        </div>
                    </div>
                </div>
            

                <div className="row">
                    <div className="col">
                        <div className="mx-4 mt-2">
                            <p className="font-20">Popularity</p>
                            <Table></Table>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mx-4 mt-2">
                            <p className="font-20">Accessed</p>
                            <Table></Table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}