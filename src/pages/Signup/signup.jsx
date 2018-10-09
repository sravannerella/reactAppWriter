import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../style.css';
import './signup.css';

export default class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            isValidEmail : true,
            fname: '',
            isValidFirstName: true,
            lname: '',
            isValidLastName: true,
            pass: '',
            isValidPass: true,
            confirmPass: '',
            isValidPassConfirm: true,
            setPass: false
        };
    }

    checkPass = ({target: {value}}) => {
        this.setState({
            pass: value,
            isValidPass: (value.length > 5) ? true : false
        })
    }

    checkPassConfirm = ({target: {value}}) => {
        this.setState({
            confirmPass: value,
            isValidPassConfirm: ( value.length > 5 && this.state.pass === value ) ? true : false
        })
    }

    validate(e){
        e.preventDefault();

        if(this.state.isValidEmail && this.state.email !== '' && this.state.isValidFirstName && this.state.fname !== '' && this.state.isValidLastName && this.state.lname !== ''){
            this.setState({
                setPass: true
            });   
        }
    }

    checkLastName(e){
        this.setState({
            lname: e.target.value,
            isValidLastName: (e.target.value.length >= 2) ? true : false
        });
    }

    checkFirstName(e){
        this.setState({
            fname: e.target.value,
            isValidFirstName: (e.target.value.length >= 2) ? true : false
        });
    }

    checkEmail(e){
        let email = e.target.value;
        let pattern = /\b[\w|\d]+@[\w|\d]+\.\w{2,}/;
        this.setState({
            email: email,
            isValidEmail: (email && email !== '' && pattern.test(email)) ? true : false
        });
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center h-100vh">
                <div className="w-600 h-400 shadow p-5 border-15">
                    <h3 className="text-center font-20">Create an Account</h3>
                    <p className="text-center">To get access</p>

                    <form className={this.state.setPass ? 'd-none mt-1': 'mt-1'}  onSubmit={this.validate.bind(this)}>
                        {/* First Name and Last Name */}
                        <div className="row">
                            <div className="col">
                                <div className="form-group mb-0">
                                    <label htmlFor="fname" className="text-muted">First Name</label>
                                    <input type="text" id="fname" name="fname" placeholder="First Name" onChange={this.checkFirstName.bind(this)} className="formControl w-100 py-2" />
                                    <small  id="fname" className={this.state.isValidFirstName ? 'invisible' : 'form-text text-danger visible'}>Atleast 2 characters</small>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group mb-0">
                                    <label htmlFor="lname" className="text-muted">Last Name</label>
                                    <input type="text" id="lname" name="lname" placeholder="Last Name" onChange={this.checkLastName.bind(this)} className="formControl w-100 py-2" />
                                    <small id="lname" className={this.state.isValidLastName ? 'invisible' : 'form-text text-danger visible'}>Atleast 2 characters</small>
                                </div>
                            </div>
                        </div>
                        
                        {/* Emails */}
                        <div className="form-group">
                            <label htmlFor="email" className="text-muted">Email</label>
                            <input type="text" id="email" name="email" placeholder="Email" className="formControl w-100 py-2" onChange={this.checkEmail.bind(this)} />
                            <small id="email" className={this.state.isValidEmail ? 'invisible' : 'form-text text-danger visible'}>Not a valid Email</small>
                        </div>

                        {/* Form Validate */}
                        <div className="row">
                            <div className="col text-left">
                                <Link to="/" className="font-weight-bold btn btn-outline-primary">Sigin Instead</Link>
                            </div>
                            <div className="col text-right">
                                <button className="font-weight-bold btn btn-primary">Validate</button>
                            </div>
                        </div>
                    </form>

                    <form className={this.state.setPass ? 'd-block mt-1' : 'd-none mt-1'}>
                        <div className="h-210">
                            <div className="row">
                                <div className="col">
                                    <div className="form-group mb-0">
                                        <label htmlFor="passwd" className="text-muted">Password</label>
                                        <input type="password" id="passwd" name="passwd" placeholder="Password" onChange={this.checkPass.bind(this)} className="formControl w-100 py-2" />
                                        <small id="lname" className={this.state.isValidPass ? 'invisible' : 'form-text text-danger visible'}>Atleast 5 characters</small>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group mb-0">
                                        <label htmlFor="cpasswd" className="text-muted">Confirm Password</label>
                                        <input type="password" id="cpasswd" name="cpasswd" placeholder="Confirm Password" onChange={this.checkPassConfirm.bind(this)} className="formControl w-100 py-2" />
                                        <small id="lname" className={this.state.isValidPassConfirm ? 'invisible' : 'form-text text-danger visible'}>Passwords do not match</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Validate */}
                        <div className="row">
                            <div className="col text-left">
                                <Link to="/" className="font-weight-bold btn btn-outline-primary">Sigin Instead</Link>
                            </div>
                            <div className="col text-right">
                                <button className="font-weight-bold btn btn-primary">Validate</button>
                            </div>
                        </div>

                    </form>
                
                </div>
            </div>
        );
    }

}