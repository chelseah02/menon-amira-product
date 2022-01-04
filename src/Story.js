import './App.css';
import NavBar from './NavBar.js';
import RunningRecord from './RunningRecord';
import './Story.css';
import {Link} from 'react-router-dom';

function Story() {
    return(
    <div id="story">
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
        <NavBar />
        <div className='btn'>
            <button className='story-btn'> Story </button>
            <button className='record-btn'> Record </button>
            <button className='student-btn'> Dorothy Hammond </button>
            <button className='save-btn'> Save </button>
        </div>
        <rect className='student-profile'>
            <h2 className='profile-title'> Student Profile </h2>
            <h1 className='student-name'> Dorothy Hammond </h1>
            <h2 className='accuracy-text'> Accuracy </h2>
            <h1 className='grade-text'> 94% </h1>

            {/* Key/Legend */}
            <ul class="legend legend-story">
                <li className='legend-title'> Legend </li>
                <li class="legend-story-item"><span class="incorrect-legend"></span> Incorrect</li>
                <li class="legend-story-item"><span class="correct-legend legend-story-item"></span> Correct </li>
                <li class="legend-story-item"><span class="flagged-legend legend-story-item"></span> Flagged </li>
                <li class="legend-story-item"><span class="low-error-legend legend-story-item"></span>Low Error Word </li>
                <li class="legend-story-item"><span class="unread-legend legend-story-item"></span> Not Read </li>
            </ul>
        </rect>
        <p className='text'>
            My dog likes to run fast. His name is Sammy and he is funny. Sammy chases his own tail when he is happy. 
            He also likes to play fetch and go to the park. One day we went to the park to play fetch. When we got
            there, we decided to have a race instead. Sammy obviously won because he is faster than I am. It was
            a fun day!
        </p>
        <rect className='scroll-bar'> </rect>
        
        {/* Audio Bar */}
        <figure>
                <audio
                    controls
                    src="/media/cc0-audio/t-rex-roar.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                </audio>
        </figure>
    </div> 
    )
}

export default Story;