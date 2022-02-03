import React from 'react';
import './styles/RunningRecord.css';
import {Link} from "react-router-dom";
import Story from './Story.js';
import ReactPlayer from "react-player";
import Footer from './Footer';

function RunningRecord() {
    return(
        <>
            <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
            {/* Record and Save Buttons */}
            <div className='button'>
                <Link to="/" className='story-button record-pg-button'>Story</Link>
                <button className='record-button'>Record</button>
                <button className='save-button'>Save</button>
            </div>

            {/* Running Record Title */}
            <div className='record-title'>
                <h1 className='scoring-student'> Scoring Dorothy Hammond's Assessment </h1>
                <h1 className='grade'> 94%</h1>
                <h1 className='accuracy'>  Accuracy </h1>
            </div>

            {/* Key/Legend */}
            <ul class="legend">
                <li><span class="incorrect-legend"></span> Incorrect </li>
                <li><span class="correct-legend"></span> Correct </li>
                <li><span class="flagged-legend"></span> Flagged </li>
                <li><span class="low-error-legend"></span>Low Error Word </li>
                <li><span class="unread-legend"></span> Not Read </li>
            </ul>
            {/* Running Record Table */}
            <table id='rr-table'>
                <tr>
                    <th> Phrase </th>
                    <th> </th>
                    <th> Error </th>
                    <th> S-C </th>
                    <th> Skip</th>
                    <th> M-P </th>
                </tr>
                <tr>
                    <td><button id='phrase-btn'> 1 </button></td>
                    <td> <span className="correct-text"> Sammy </span> <span className='incorrect-text'> chases  </span> <span className="correct-text"> his own tail when he </span><span className='low-error-text'> is </span> <span className="correct-text">happy.</span></td>
                    <td> 1 </td>
                    <td> 0 </td>
                    <td> 0 </td>
                    <td> 1 </td>
                </tr>
                <tr>
                    <td><button id='phrase-btn'> 2 </button></td>
                    <td> <span className="correct-text">He also </span> <span className='low-error-text'> likes to </span> <span className="correct-text"> play </span><span className='flagged-text'>fetch </span>   <span className="correct-text"> and go to the park. </span> </td>
                    <td> 0 </td>
                    <td> 1 </td>
                    <td> 0 </td>
                    <td> 1 </td>
                </tr>
                <tr> 
                    <td><button id='phrase-btn'> 3 </button></td>
                    <td> <span className="correct-text"> It </span> <span className= 'unread-text'> was a  </span><span className="correct-text"> fun day! </span> </td>
                    <td> 0 </td>
                    <td> 0 </td>
                    <td> 1 </td>
                    <td> 0 </td>
                </tr>
                <tr>
                    <td><button id='phrase-btn'> 4 </button></td>
                    <td> This is a sentence phrase. </td>
                    <td> 0 </td>
                    <td> 1 </td>
                    <td> 0 </td>
                    <td> 1</td>
                </tr>
            </table>

            {/* Audio Bar  */}
            <ReactPlayer
                id="myAudio"
                url="https://ia801309.us.archive.org/5/items/eubanks_elizabeth_01/eubanks_elizabeth_01.mp3"
                width="80%"
                height="50px"
                playing={false}
                controls={true}
                style={{marginBottom: "2%", marginTop: "0%"}}
            />
        </>
    )
}

export default RunningRecord;