import React, {Component} from 'react';
import arrow from "./arrow.svg";
import InputMask from 'react-input-mask';
import './signUp.css'


class SignUp extends Component {

    state = {
      country: "",
    };

    countryHandler = (e) => {
        this.setState({country: e.target.innerText})
    };

    render() {
        return (
            <div className="SignUpContainer">
                <div className="form_signUp">
                    <div className="signInBlock">
                        <span className="signIn">Already have an account? <a href="/login">Sign In</a></span>
                    </div>
                    <div className="form_block_signUp">
                        <p className="title_signUp">
                            Sign Up
                        </p>
                        <div className="two_input">
                            <div className="two_input_block">
                                <p>First name</p>
                                <input className="in1" type="text" placeholder="Malika"/>
                            </div>
                            <div className="two_input_block">
                                <p>Last name</p>
                                <input className="in2" type="text" placeholder="Umurzakova"/>
                            </div>
                        </div>
                        <div className="inputs_and_btns">
                            <p>Email</p>
                            <input className="inputs_input" type="text" placeholder="test@gmail.com"/>
                            <p>Password</p>
                            <input className="inputs_input"  type="password" placeholder="***************"/>
                            <p>Country</p>
                            <div className="inputCountry">
                                <input type="text" placeholder="Kyrgyzstan" defaultValue={this.state.country}/>
                                <div className="select">
                                    <img src={arrow} alt=""/>
                                    <div className="options">
                                        <p onClick={this.countryHandler}>Russian</p>
                                        <p onClick={this.countryHandler}>Quazaqstan</p>
                                        <p onClick={this.countryHandler}>Kyrgyzstan</p>
                                        <p onClick={this.countryHandler}>Armenia</p>
                                    </div>
                                </div>
                            </div>
                            <p>Phone number</p>
                            <div className="inputNumber">
                                <InputMask type="text" defaultValue="+996" mask="+999"/>
                                <InputMask type="text" placeholder="599-99-99-99" mask="999-99-99-99"/>
                            </div>
                            <button className="btn_signUp">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;