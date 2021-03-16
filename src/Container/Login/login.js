import React, {Component} from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className="LoginContainer">
                <div className="form_container">
                    <div className="form">
                        <p className="title_form">Log In</p>
                        <div className="inputs">
                            <p>Email</p>
                            <input type="email"/>
                            <p>Password</p>
                            <input type="password"/>
                            <a href="/">Forgot password?</a>
                            <button className="log_in_btn">Log In</button>
                        </div>
                        <span>Need an account? <a href="/">Sign Up</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;