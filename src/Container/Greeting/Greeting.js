import React, {Component} from 'react';
import './Greeting.css';
import arrow from './arrow.svg';

class Greeting extends Component {

  state = {
    user: JSON.parse(localStorage.getItem('user')),
  }

  render() {
    return (
      <div className="GreetingContainer">
        <div className="title">
          {this.state.user ? (
            <div className="title_2">
              <p>Update your account <br/> and start using<br/> platform</p>
              <div className="navigation">
                <div>
                  <span>
                    <a href="/postJob">I want to post job</a>
                    <img src={arrow} alt=""/>
                  </span>
                  <br/>
                  <span>
                    <a href="/find">I want to find work</a>
                    <img src={arrow} alt=""/>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <h2>Join our <br/> IT_Collaboration <br/> community</h2>
          )}
        </div>
      </div>
    );
  }
}

export default Greeting;