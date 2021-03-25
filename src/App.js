import React from "react"
import {Switch, Route} from "react-router-dom"
import './App.css';
import Login from './Container/Login/login'
import Header from "./Component/Navigation/Header/Header";
import Greeting from "./Container/Greeting/Greeting";
import SignUp from "./Container/SignUp/signUp";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <div className="App">
        <ToastContainer/>
          <Header/>
          <Switch>
              <Route path="/" exact component={Greeting}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
          </Switch>
      </div>
);
}

export default App;
