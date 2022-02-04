import React from 'react';
import './styles/RunningRecord.css';
import {Link} from "react-router-dom";
import Story from './Story.js';
import ReactPlayer from "react-player";
import Footer from './Footer';
import ReactHtmlParser from 'react-html-parser'

function RunningRecord(props) {
    console.log(props.location.state.data)
    var story_text = props.location.state.data.story_text
    var classified = props.location.state.data.classified
    var items = []
    var errors = 0
    var num_words = 0
    var num_errors = 0
    for(var i=0; i < story_text.length; i++) {
        var words = story_text[i].split(" ")
        var sentence = "";
        var error = 0
        var mp = 0
        
        for (var j=0; j < words.length; j++) {
            num_words++
            if (j == 0) {
                words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
            } else if (j == words.length - 1) {
                words[j] += '.'
            }
            if (classified.sent_index[errors] == i && classified.error_index[errors] == j) {
                var type;
                if (classified.error_type[errors] == "miscue - substitution") {
                    type = "incorrect-text"
                    error++
                    num_errors++
                } else if (classified.error_type[errors] == "correct - self-correction") {
                    type = "low-error-text"
                    mp++
                    num_errors++
                }
                sentence = sentence + "<span class='" + type + "'>" + words[j] + " " + "</span>"
                errors++
            } else {
                sentence = sentence + "<span class='correct-text'>" + words[j] + " " + "</span>"
            }
        }
        var curJSX = "<tr><td><button id='phrase-btn'>" + (i+1).toString() + "</button></td>" + sentence + "<td>" + (error + mp).toString() +  "</td><td>" + mp.toString() +  "</td><td> 0 </td><td>" + error.toString() + "</td></tr>"
        items.push(ReactHtmlParser(curJSX))
    }
    return(
        <>
            <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
            {/* Record and Save Buttons */}
            <div className='button'>
                <Link to={{ pathname: '/story', state: {data: props.location.state.data}}} className='story-button record-pg-button'>Story</Link>
                <button className='record-button'>Record</button>
                <button className='save-button'>Save</button>
            </div>

            {/* Running Record Title */}
            <div className='record-title'>
                <h1 className='scoring-student'> Scoring Dorothy Hammond's Assessment </h1>
                <h1 className='grade'> {((1 - num_errors / num_words) * 100).toString().slice(0, 2)}%</h1>
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
                    <th> Sentence </th>
                    <th> Error </th>
                    <th> S-C </th>
                    <th> Skip</th>
                    <th> M-P </th>
                </tr>
                {items}
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