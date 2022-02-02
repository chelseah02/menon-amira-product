import React from 'react'
import './styles/App.css';
import './styles/Team.css';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import ethanPic from './images/ethan_profile.jpg';
import chelseaPic from './images/chelsea_profile.jpg';
import shreeyaPic from './images/shreeya_profile.jpg';
import eminPic from './images/emin_profile.jpg';
import shriramPic from './images/shriram_profile.jpg';
import trangPic from './images/trang_profile.jpg';

 function Team() {
    return (
      <div className='center team'>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
        <h1 className='team-title'> Meet the Team </h1>
        <div className="justify-content-sm-center">
            <card className='team-card ethan-card'>
                <div className='card-container'>
                    <img src={ethanPic} className='team-pic'/>
                    <p className='team-card-title' tag="h6"> Ethan Seto, Project Manager</p>
                    <p className='team-card-text' tag="h6"> Major: Computer & Cognitive Science </p>
                    <p className='team-card-text' tag="h6"> School: University of Pennsylvania </p>
                    <p className='team-card-text' tag="h6"> Grad Year: 2023</p>
                    <p className='team-card-linkedin' > <Link className="team-link" to={{pathname: 'https://www.linkedin.com/in/ethan-seto/'}} target="_blank">LinkedIn</Link></p>
                    <p className='team-card-github'><Link className="team-link" to={{pathname: 'https://github.com/easeto'}} target="_blank">GitHub</Link></p>
                </div>
            </card>
            <card className='team-card chelsea-card'>
                <div className='card-container'>
                    <img src={chelseaPic} className='team-pic'/>
                    <p className='team-card-title chelsea-title' tag="h6"> Chelsea Heredia, Frontend Developer </p>
                    <p className='team-card-text major' tag="h6"> Major: Computer Science </p>
                    <p className='team-card-text' tag="h6"> School: University of Texas at Dallas </p>
                    <p className='team-card-text' tag="h6"> Grad Year: 2024</p>
                    <p className='team-card-linkedin' > <Link className="team-link" to={{pathname: 'https://www.linkedin.com/in/chelsea-heredia/'}} target="_blank">LinkedIn</Link></p>
                    <p className='team-card-github'><Link className="team-link" to={{pathname: 'https://github.com/chelseah02'}} target="_blank">GitHub</Link></p>
                </div>
            </card>
            <card className='team-card shreeya-card'>
                <div className='card-container'>
                    <img src={shreeyaPic} className='team-pic'/>
                    <p className='team-card-title chelsea-title' tag="h6"> Shreeya Patel, Frontend Developer </p>
                    <p className='team-card-text major' tag="h6"> Major: Engineering </p>
                    <p className='team-card-text' tag="h6"> School: Columbia University </p>
                    <p className='team-card-text' tag="h6"> Grad Year: 2025</p>
                    <p className='team-card-linkedin' > <Link className="team-link" to={{pathname: 'https://www.linkedin.com/in/shreeya-j-patel/'}} target="_blank">LinkedIn</Link></p>
                    <p className='team-card-github'><Link className="team-link" to={{pathname: 'https://github.com/shreeyapatell'}} target="_blank">GitHub</Link></p>
                </div>
            </card>
            <card className='team-card emin-card'>
                <div className='card-container'>
                    <img src={eminPic} className='team-pic'/>
                    <p className='team-card-title chelsea-title' tag="h6"> Emin Lacin, Data Scientist </p>
                    <p className='team-card-text major' tag="h6"> Major: Complex Systems Engineering </p>
                    <p className='team-card-text' tag="h6"> School: CentraleSupelec </p>
                    <p className='team-card-text' tag="h6"> Grad Year: 2022</p>
                    <p className='team-card-linkedin' > <Link className="team-link" to={{pathname: 'https://www.linkedin.com/in/eminlacin/'}} target="_blank">LinkedIn</Link></p>
                    <p className='team-card-github'><Link className="team-link" to={{pathname: 'https://github.com/eminlacin'}} target="_blank">GitHub</Link></p>
                </div>
            </card>
            <card className='team-card shiriram-card'>
                <div className='card-container'>
                    <img src={shriramPic} className='team-pic'/>
                    <p className='team-card-title chelsea-title' tag="h6"> Shriram Holla, Data Scientist </p>
                    <p className='team-card-text major' tag="h6"> Major: Computer Science </p>
                    <p className='team-card-text' tag="h6"> School: University of Waterloo </p>
                    <p className='team-card-text' tag="h6"> Grad Year: 2024</p>
                    <p className='team-card-linkedin' > <Link className="team-link" to={{pathname: 'https://www.linkedin.com/in/shriramholla/'}} target="_blank">LinkedIn</Link></p>
                    <p className='team-card-github'><Link className="team-link" to={{pathname: 'https://github.com/shriramholla'}} target="_blank">GitHub</Link></p>
                </div>
            </card>
            <card className='team-card trang-card'>
                <div className='card-container'>
                    <img src={trangPic} className='team-pic'/>
                    <p className='team-card-title chelsea-title' tag="h6"> Trang Duong, Data Scientist </p>
                    <p className='team-card-text major' tag="h6"> Major: Data Science & Mathematics </p>
                    <p className='team-card-text' tag="h6"> School: Bawr College </p>
                    <p className='team-card-text' tag="h6"> Grad Year: 2023</p>
                    <p className='team-card-linkedin' > <Link className="team-link" to={{pathname: 'https://www.linkedin.com/in/trang-d-013212b0/'}} target="_blank">LinkedIn</Link></p>
                    <p className='team-card-github'><Link className="team-link" to={{pathname: 'https://github.com/tduong191'}} target="_blank">GitHub</Link></p>
                </div>
            </card>
        </div>
      </div>
    );
  }

  export default Team;