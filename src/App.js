import React from "react"
import {Switch, Route} from "react-router-dom"
import './App.css';
import Login from './Container/Login/login'
import Header from "./Component/Navigation/Header/Header";
import Greeting from "./Container/Greeting/Greeting";

function App() {
  return (
      <div className="App">
          <Header/>
          <Switch>
              <Route path="/" exact component={Greeting}/>
              <Route path="/login" component={Login}/>
          </Switch>
      </div>
);
}

export default App;
