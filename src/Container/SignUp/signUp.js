import React, {Component} from 'react';
import arrow from "./arrow.svg";
import './signUp.css'
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";
import axiosAPI from "../../axiosAPI";


class SignUp extends Component {

    state = {
        country: "",
        cod: "+996",
        username: "",
        userEmail: "",
        lastName: "",
        password: "",
        number: "",
        users: []
    };

    async componentDidMount() {
        const res = await axiosAPI.get('/users.json');
        this.setState({users: res.data});
    }

    inputValHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    countryHandler = (e) => {
        this.setState({country: e.target.innerText ? e.target.innerText: e.target.value});
        if(e.target.innerText === "Kyrgyzstan" || e.target.value === "Kyrgyzstan"){
            this.setState({cod: "+996"})
        }else if(e.target.innerText === "Armenia" || e.target.value === "Armenia"){
            this.setState({cod: "+374"})
        }else if(e.target.innerText === "Russia" || e.target.value === "Russia"
          || e.target.innerText === "Kazakhstan" || e.target.value === "Kazakhstan"){
            this.setState({cod: "+7"})
        }
    };

    error = () => {
        toast.error("Заполните все поля для ввода!")
    }

    signUpHandler = () => {
        let numOfEmptyInputs = 0;

        const userInfo = {
            country: this.state.country,
            username: this.state.username,
            userEmail: this.state.userEmail,
            lastName: this.state.lastName,
            password: this.state.password,
            number: this.state.cod + this.state.number,
        }
        for(let key in userInfo){
            if(userInfo[key] === ""){
                numOfEmptyInputs += 1
            }
        }
        if(numOfEmptyInputs !== 0){
            this.error()
        }else{
            let user = null;
            Object.keys(this.state.users).forEach(i => {
                if(this.state.users[i].userEmail === userInfo.userEmail){
                    user = this.state.users[i]
                }
            })
            if(!user){
                axiosAPI.post('/users/.json', userInfo)
                this.props.history.push('/login')
            }else{
                toast.error("Такой пользоваетль уже есть!")
            }
        }
    }

    render() {
        if(localStorage.getItem('user')) return window.location.pathname = "/home";
        return (
            <div className="SignUpContainer">
                {console.log(this.state.country)}
                <div className="form_signUp">
                    <div className="signInBlock">
                        <span className="signIn">Already have an account? <NavLink to="/login">Sign In</NavLink></span>
                    </div>
                    <div className="form_block_signUp">
                        <p className="title_signUp">
                            Sign Up
                        </p>
                        <div className="two_input">
                            <div className="two_input_block">
                                <p>First name</p>
                                <input className="in1" name="username" onChange={this.inputValHandler} type="text" placeholder="Malika"/>
                            </div>
                            <div className="two_input_block">
                                <p>Last name</p>
                                <input className="in2" name="lastName" onChange={this.inputValHandler} type="text" placeholder="Umurzakova"/>
                            </div>
                        </div>
                        <div className="inputs_and_btns">
                            <p>Email</p>
                            <input className="inputs_input" name="userEmail" onChange={this.inputValHandler} type="text" placeholder="test@gmail.com"/>
                            <p>Password</p>
                            <input className="inputs_input" name="password" onChange={this.inputValHandler} type="password" placeholder="***************"/>
                            <p>Country</p>
                            <div className="inputCountry">
                                <input type="text" placeholder="Kyrgyzstan" onChange={this.countryHandler} value={this.state.country}/>
                                <div className="select">
                                    <img src={arrow} alt=""/>
                                    <div className="options">
                                        <p onClick={this.countryHandler}>Russia</p>
                                        <p onClick={this.countryHandler}>Kazakhstan</p>
                                        <p onClick={this.countryHandler}>Kyrgyzstan</p>
                                        <p onClick={this.countryHandler}>Armenia</p>
                                    </div>
                                </div>
                            </div>
                            <p>Phone number</p>
                            <div className="inputNumber">
                                <input type="text" value={this.state.cod} readOnly/>
                                <input type="text" name="number" onChange={this.inputValHandler} placeholder="599-99-99-99"/>
                            </div>
                            <button className="btn_signUp" onClick={this.signUpHandler}>
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