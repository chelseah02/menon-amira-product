import { react } from "@babel/types";
import React from 'react';
import ReactDOM from 'react-dom';
import amiralogo from './images/amira-logo.PNG';
import {Link} from 'react-router-dom';
import './App.css';
import './Footer.css';
        
function Footer() {
    return (
        <>
            <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
            <footer className="footer">
                <h2 className="footer-title"> AMIRA TEAM 3 FINAL PRODUCT </h2>
                <table className="footer-tbl">
                    <tr className="footer-row">
                        <th className="footer-th"> About Us </th>
                        <th className="footer-th"> Tools and Technologies </th>
                        <th className="footer-th"> Learn More </th>
                    </tr>
                    <tr className="footer-row">
                        <td className="link footer-td"> <Link className="footer-link" to="/team"> Meet the Team </Link></td>
                        <td className="tools footer-td"> HTML and CSS </td>
                        <td className="link footer-td"> <Link className="footer-link" to={{pathname: "https://github.com/chelseah02/menon-amira-product"}} target="_blank"> View Source Code </Link></td>
                    </tr>
                    <tr className="footer-row">
                        <td className="link footer-td"> <Link className="footer-link" to={{pathname: "https://www.menonlabs.com/"}} target="_blank">What is Menon Labs? </Link></td>
                        <td className="tools footer-td"> ReactJS and Figma </td>
                        <td className="link footer-td"> Notion Documentation </td>
                    </tr>
                    <tr className="footer-row">
                        <td className="link footer-td"> <Link className="footer-link" to={{pathname: "https://www.amiralearning.com/"}} target="_blank"> Amira Learning </Link> </td>
                        <td className="tools footer-td"> Jira and GitHub </td>
                        <td className="link footer-td"> <Link className="footer-link" to={{pathname: "https://www.figma.com/file/aDGjLO4RDK2ISqRteefKuW/Amira-Learning?node-id=2%3A2" }} target="_blank"> Figma Design </Link> </td>
                    </tr>
                </table>
            </footer>

        </>
        
    )
}

export default Footer;