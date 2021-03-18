import React, {Component} from 'react';
import './Header.css'
import search_icon from "./search_icon.svg"

class Header extends Component {

    loginPush = () => {
        window.location.pathname = "/login"
    };

    signUpPush = () => {
        window.location.pathname = "/signup"
    };

    componentDidMount() {
        if(window.location.pathname === "/login" || window.location.pathname === "/signup"){
            const head = document.querySelector('.head');
            head.style.display = "block";
            head.children[0].children[0].style.marginLeft = "150px";
        }
    }

    homePush = () => {
        window.location.pathname = "/"
    };

    render() {
        return (
            <header className="head">
                <nav className="main_nav">
                    <div className="logo">
                        <p onClick={this.homePush}>IT_Collaboration</p>
                    </div>
                    {window.location.pathname !== "/login" && window.location.pathname !== "/signup" ? (
                        <>
                            <ul className="main_ul">
                                <li><a href="/">Home</a></li>
                                <li><a href="/companies">Companies</a></li>
                                <li><a href="/specialists">Specialists</a></li>
                            </ul>
                            <div className="buttons_and_search">
                                <div className="search_block">
                                    <img src={search_icon} alt=""/>
                                    <input type="text" placeholder="      Search"/>
                                </div>
                                <div className="btns">
                                    <button className="login" onClick={this.loginPush}>
                                        Log In
                                    </button>
                                    <button className="signup" onClick={this.signUpPush}>
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </nav>
            </header>
        );
    }
}

export default Header;