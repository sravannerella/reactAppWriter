import React, {Component} from 'react';
import './home.css';
import Header from '../../../components/Header/Header';
import SideMenu from '../../../components/SideMenu/Sidemenu';
import Analytics from '../Analytics/Analytics';
import Users from '../Users/Users';
import { PrivateRoute } from '../../../router/PrivateRouter';
import { createStore } from 'redux';
import Datasets from '../Datasets/Datasets';
import Settings from '../Settings/Settings';

export default class Home extends Component{

    store
    constructor(props){
        super(props);
        this.store = createStore(this.checkSidebarState);
        this.state = {
            isSidebarOpen : 0
        }
    }

    componentDidMount(){
        this.store.subscribe(() => {
            this.setState({
                isSidebarOpen: this.store.getState()
            });
        });
    }

    checkSidebarState(state = 0, action){
        return action.type === 'open' ? state = 1 : state = 0;
    }

    render(){
        return(
            <div>
                <Header store={this.store}></Header>
                <div className="d-flex">
                    <SideMenu store={this.store}></SideMenu>
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