import React from "react";
import github_logo from "../../assets/github_logo.png"
import {createBrowserHistory} from "history";
import './Header.css'

const Header = () => {

    const history = createBrowserHistory()

    if (history.location.pathname === '/') {
        return (
            <div className={'app-header'}>
                <img className={'app-logo'} src={github_logo} alt="logo"/>
                <p className={'header-text'}>GitHub users</p>
            </div>
        )
    } else {
        return (
            <div className={'app-header'}>
                <div className="back-button"><a href="/">Back</a></div>
                <div className="header-info">
                    <img className={'app-logo'} src={github_logo} alt="logo"/>
                    <p className={'header-text'}>GitHub users</p>
                </div>
            </div>
        )
    }
}

export default Header