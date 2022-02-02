import { react } from "@babel/types";
import React from 'react';
import ReactDOM from 'react-dom';
import amiralogo from './images/amira-logo.PNG';
import {Link} from 'react-router-dom';
import './styles/App.css';

function NavBar() {

    const navStyle = {
            color: '#62E49D'
        };

    return (
        <>
            <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
            <nav className="nav-bar" margin="0">
                <img src={amiralogo} className="nav-logo" margin="0" width="10%"></img>
                <Link style={navStyle} to='/report'>
                    <h2 className="nav-report" margin="0" padding = "0"> Report</h2>
                </Link>
                
                <Link style={navStyle} to='/record'>
                    <h2 className="nav-review" margin="0" padding="0"> Review Activity</h2>
                </Link>
            </nav>
        </>
    )
}

export default NavBar;