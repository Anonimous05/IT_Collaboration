import React from "react"
import {Switch, Route} from "react-router-dom"
import './App.css';
import Login from './Container/Login/login'
import Header from "./Component/Navigation/Header/Header";
import Greeting from "./Container/Greeting/Greeting";
import SignUp from "./Container/SignUp/signUp";
import {ToastContainer} from "react-toastify";
import SettingsCompany from "./Container/Settings/settingsCompany";
import Companies from "./Container/Companies/Companies";
import Specialists from "./Container/Specialists/Specialists";

function App() {
  return (
      <div className="App">
        <ToastContainer/>
          <Header/>
          <Switch>
              <Route path="/" exact component={Greeting}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/settings" component={SettingsCompany}/>
              <Route path="/companies" component={Companies}/>
              <Route path="/specialists" component={Specialists}/>
          </Switch>
      </div>
);
}

export default App;
