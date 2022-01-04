import NavBar from './NavBar.js';
import React from 'react';
import './Report.css';

export default function RunningRecord() {
    return(
        <>
            <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>

            {/* Running Record Title */}
            <div className='record-title'>
                <h1 className='scoring-student'> Dorothy Hammond's Assessment Report </h1>
            </div>

            {/* Key/Legend */}
            <ul class="legend">
                <li><span class="incorrect-legend"></span> Incorrect </li>
                <li><span class="correct-legend"></span> Correct </li>
                <li><span class="flagged-legend"></span> Flagged </li>
                <li><span class="low-error-legend"></span>Low Error Word </li>
                <li><span class="unread-legend"></span> Not Read </li>
            </ul>

    
        </>
    )
}
