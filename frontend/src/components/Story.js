import React, {useState} from "react";
import './styles/App.css';
import RunningRecord from './RunningRecord';
import './styles/Story.css';
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
function Story(props) {
    const [showProfile, setProfileVisibility] = useState(false);
    var story_text = props.location.state.data.story_text
    var classified = props.location.state.data.classified
    console.log(props.location.state.data)
    var items = []
    var errors = 0

    for(var i=0; i < story_text.length; i++) {
        var words = story_text[i].split(" ")
        for (var j=0; j < words.length; j++) {
            if (j == 0) {
                words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
            } else if (j == words.length - 1) {
                words[j] += '.'
            }
            if (classified.sent_index[errors] == i && classified.error_index[errors] == j) {
                var type;
                if (classified.error_type[errors] == "miscue - substitution") {
                    type = "incorrect-text"
                } else {
                    type = "low-error-text"
                }
                items.push(<span className={type}>{words[j] + ' '}</span>)
                errors++
            } else {
                items.push(words[j] + ' ')
            }
        }
    }
    console.log(items)
    return(
    <div id="story">
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
        <div className='btn'>
            <Link className='story-btn' to='/'> Story </Link>
            <Link className='record-btn' to={{ pathname: '/record', state: {data: props.location.state.data}}}> Record </Link>
            <button className='student-btn'> Dorothy Hammond </button>
            <button className='save-btn'> Save </button>
        </div>
        <button className='expand-btn' onClick={() => setProfileVisibility(true)}> {">"}</button>
        <div>
        <h3 className='close-btn' onClick={() => setProfileVisibility(false)}> {"<"}</h3>
        </div>
        {showProfile ? <Profile /> : null}
        <p className='text'>
            {items}
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