import React, {Component} from 'react';
import './../style.css';
import { Link } from 'react-router-dom';
import { Auth } from './../../providers/Auth/auth';

export default class Login extends Component{

    constructor(props){
        super(props);
        if( JSON.parse(localStorage.getItem('authenticated')) === true ) {
            this.props.history.push('/home');
        }

        this.state = {
            email: '',
            isValidEmail: true,
            pass: '',
            isValidPass: true,
            showPass: false,
            canlogin: false
        }
    }

    componentDidMount(){
        this.email.focus();
    }

    check(e) {
        e.preventDefault();
        if(this.state.email !== '' && this.state.isValidEmail === true){
            this.setState({
                showPass: true
            });
            setTimeout(()=>{
                this.pass.focus();
            }, 200);
        }
    }

    login(e){
        e.preventDefault();
        if(this.state.email && this.state.pass !== ""){
            this.setState({
                canlogin: true
            });
            Auth.authenticate( (data) => {
                console.log("Sucess", data);
            }, (err) => {
                console.log("Failure");
            });
            this.props.history.push('/home');
        }
    }

    checkPass = ({target: {value}}) => {
        this.setState({
            pass: value,
            isValidPass: true
        });
    }

    checkEmail = (e) => {
        let email = e.target.value;
        let pattern = /\b[\w|\d]+@[\w|\d]+\.\w{2,}/;
        this.setState({
            email: email,
            isValidEmail: (email && email !== '' && pattern.test(email)) ? true : false
        });

        if(this.state.isValidEmail){
            e.target.classList.remove("error");
            e.target.classList.add("success");
        } else{
            e.target.classList.remove("success");
            e.target.classList.add("error");
        }
    }

    render(){
        return(
            <div className="d-flex align-items-center justify-content-center h-100vh">
                <div className="w-400 h-400 shadow p-5 border-15">
                    <h3 className="text-center font-20">Login</h3>
                    <p className="text-center">to your account</p>

                    <form className="mt-5">
                        <div  className={(this.state.showPass) ? "d-none" : 'form-group'}>
                            <label htmlFor="email" className="text-muted">Email</label>
                            <input ref={(input)=> {this.email = input}} type="text" id="email" name="email" placeholder="Email" className="formControl w-100 py-2" onChange={this.checkEmail.bind(this)} />
                            <small id="email" className={this.state.isValidEmail ? 'invisible' : 'form-text text-danger visible'}>Not a valid Email</small>
                        </div>

                        <div className={(this.state.showPass) ? "form-group" : 'd-none'}>
                            <label htmlFor="pass" className="text-muted">Password</label>
                            <input ref={(input)=> {this.pass = input}} type="password" id="pass" name="pass" placeholder="Password" className="formControl w-100 py-2" onChange={this.checkPass.bind(this)} />
                            <small id="pass" className='invisible'></small>
                        </div>

                        <div className="form-group mt-2">
                            <Link to="/" className="font-weight-bold text-primary">Forgot Email?</Link>
                            <Link to="/signup" className="font-weight-bold text-primary float-right">New Account!</Link>
                        </div>

                        <div className="form-group mt-2 float-right">
                            <button  className={(this.state.showPass) ? "d-none" : 'btn btn-primary w-75px py-2 font-weight-bold'} onClick={this.check.bind(this)}>Next</button>
                            <button  className={(this.state.showPass) ? 'btn btn-primary w-75px py-2 font-weight-bold' :  "d-none"} onClick={this.login.bind(this)}>Login</button>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}