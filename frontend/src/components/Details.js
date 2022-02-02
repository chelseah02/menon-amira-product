import React from 'react';
import ReactDOM from 'react-dom';
import breakdown from './images/error-breakdown.JPG';
import trend from './images/error-specific-graph.png';
import "./styles/Details.css";

function Details() {
    return (
        <>
            <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
            <h1 className='report-student'> Dorothy Hammond's Assessment Report - Details</h1>
            <h2 className='story-title'> Story 1</h2>
            <img src={breakdown} className="" margin="0" width="70%"></img>
            <img src={trend} className="trend" margin="0" width="70%"></img>
            <br></br>
        </>
    )
}

export default Details;