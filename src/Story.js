import React, {useState} from "react";
import './App.css';
import RunningRecord from './RunningRecord';
import './Story.css';
import {Link} from 'react-router-dom';
import ReactPlayer from "react-player";

const Profile = () => 
    <rect className='student-profile'>
    <h2 className='profile-title'> Student Profile </h2>
    <h1 className="student-name"> Dorothy Hammond </h1>
    <h2 className='accuracy-text'> Accuracy <span className='grade-text'>94%</span></h2>

    {/* Key/Legend */}
    <ul class="legend legend-story">
        <li className='legend-title'> Legend </li>
        <li class="legend-story-item incorrect-story-word"><span class="incorrect-legend incorrect-story"></span> Incorrect</li>
        <li class="legend-story-item"><span class="correct-legend legend-story-item"></span> Correct </li>
        <li class="legend-story-item"><span class="flagged-legend legend-story-item"></span> Flagged </li>
        <li class="legend-story-item"><span class="low-error-legend legend-story-item"></span>Low Error Word </li>
        <li class="legend-story-item"><span class="unread-legend legend-story-item"></span> Not Read </li>
    </ul>
    </rect>
;
function Story() {
    const [showProfile, setProfileVisibility] = useState(false);
    const onClick = () => setProfileVisibility(true);
    return(
    <div id="story">
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
        <div className='btn'>
            <Link className='story-btn' to='/'> Story </Link>
            <Link className='record-btn' to='/record'> Record </Link>
            <button className='student-btn'> Dorothy Hammond </button>
            <button className='save-btn'> Save </button>
        </div>
        <button className='expand-btn' onClick={onClick}> {">"}</button>
        {showProfile ? <Profile /> : null}
        <p className='text'>
            My dog <span className='low-error-text'>likes</span> to run fast. His name is Sammy and he is funny. Sammy <span className='incorrect-text'>chases</span> his own tail when he <span className='low-error-text'>is</span> happy. 
            He also <span className='low-error-text'> likes to </span> play <span className='flagged-text'>fetch</span> and go to the park. One day we went to the park to play <span className='incorrect-text'>fetch</span>. When we got
            there, we <span className='incorrect-text'>decided</span> to have a race <span className='incorrect-text'>instead</span>. Sammy <span className='incorrect-text'>obviously</span> won <span className='incorrect-text'>because</span> he is faster than I am. It <span className='unread-text'> was a </span>fun day!
        </p>
        <rect className='scroll-bar'> </rect>
        
        {/* Audio Bar */}
        <ReactPlayer 
            url="https://ia801309.us.archive.org/5/items/eubanks_elizabeth_01/eubanks_elizabeth_01.mp3"
            width="62%"
            height="7.5%"
            playing={false}
            controls={true}
            style={{marginLeft: "22%"}}
        />
    </div> 
    )
}

export default Story;