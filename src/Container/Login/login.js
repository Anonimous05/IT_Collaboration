import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";
import {toast} from "react-toastify";
import './Login.css';

class Login extends Component {

    state = {
      userEmail: "",
      password: "",
      users: []
    }

    async componentDidMount() {
      const res = await axiosAPI.get('/users.json');
      this.setState({users: res.data})
    }

  inputValHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    error = () => {
      toast.error("Введите корректныйе данные!")
    }

    loginHandler = async () => {
      const object = {
          userEmail: this.state.userEmail,
          password: this.state.password
      };
      if(object.userEmail === ""|| object.password === ""){
        this.error();
      }else{
        let user = null;
        this.state.users && Object.keys(this.state.users).forEach(i => {
            if(this.state.users[i].userEmail === object.userEmail){
              user = this.state.users[i];
            }
        })
        if(user && user.userEmail === object.userEmail){
          if(user.password === object.password){
            const userObj = {
              username: user.username,
              lastName: user.lastName,
              userEmail: user.userEmail,
              country: user.country,
              number: user.number,
               numberForInput: user.numberForInput
            }
            toast.dark(`Добро пожаловать ${userObj.username}!`);
            localStorage.setItem('user', JSON.stringify(userObj))
            setTimeout(() => {
              window.location.pathname = "/";
            }, 1000)
          }else{
            this.error();
          }
        }else{
          this.error();
        }
      }
    };

    render() {
      if(localStorage.getItem('user')) return window.location.pathname = "/home";
        return (
            <div className="LoginContainer">
                <div className="form_container">
                    <div className="form">
                        <p className="title_form">Log In</p>
                        <div className="inputs">
                            <p>Email</p>
                            <input id="userEmail" type="email" name="userEmail" onChange={this.inputValHandler} required/>
                            <p>Password</p>
                            <input id="password" type="password" name="password" onChange={this.inputValHandler} required/>
                            <a href="/">Forgot password?</a>
                            <button onClick={this.loginHandler} className="log_in_btn">Log In</button>
                        </div>
                        <span>Need an account? <a href="/signup">Sign Up</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;