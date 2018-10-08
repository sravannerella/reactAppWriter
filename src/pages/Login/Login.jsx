import React, {Component} from 'react';

export default class Login extends Component{

    constructor(){
        super();
        this.state = {
            isValidEmail: true
        }
    }

    checkEmail(e){
        let email = e.target.value;
        console.log(email);
        let pattern = /\b[\w|\d]+@[\w|\d]+\.\w{2,}/;
        this.setState({
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
                <div className="w-500 shadow p-5 border-15">
                    <h3>Login</h3>
                    <p>to your account</p>

                    <form className="mt-5">
                        <div className="form-group">
                            <label htmlFor="email" className="font-weight-bold">Email</label>
                            <input type="text" id="email" name="email" placeholder="Email" className="formControl w-100 py-2" onChange={this.checkEmail.bind(this)} />
                            <small id="email" className={this.state.isValidEmail ? 'invisible' : 'form-text text-danger visible'}>Not a valid Email</small>
                        </div>

                        <div className="form-group mt-2">
                            <a href="/" className="font-weight-bold text-primary">Forgot Email?</a>
                            <a href="/" className="font-weight-bold text-primary float-right">Demo</a>
                        </div>

                        <div className="form-group mt-2 float-right">
                            <button className="btn btn-primary w-150px">Next</button>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}