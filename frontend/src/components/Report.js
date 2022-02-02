import React from 'react'
import './styles/App.css';
import './styles/Report.css';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function Report() {
  return (
        <>
            <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
            <div>
            <h1 className='report-student'> Dorothy Hammond's Assessment Report</h1>
            <Link to='/details' class="details"> Details  {">"}</Link>
            </div>

                <ul class="legend report-legend">
                <li><span class="report-incorrect-legend"></span> Incorrect </li>
                <li><span class="report-correct-legend"></span> Correct </li>
                <li><span class="report-flagged-legend"></span> Flagged </li>
                <li><span class="report-low-error-legend"></span>Low Error Word </li>
                <li><span class="report-unread-legend"></span> Not Read </li>
                </ul>
                <div class="report-subBG"> </div>
                <div class="correct-rect"> 95 WORDS </div>
                <div class="correct-report-text"> For, spring, break, and, his, family, were, going, to, visit, just, two, days, before, the, vacation, he, off, bike, crack, had, never, felt, such, a, pain, mother, took, him, hospital, have, X rays, get, shot, after, doctor, told, leg, broken, would, spend, day, in, put, cast, on, said, wear, it, five, weeks, also, learn, walk, with, easy, use, friends, came, go, away, but, still, bad, thought, was, ruined, wanted, stay, home, rest, few, that, meant, not, see, grandparents, parents, they, made, feel, next, heard, knock, at, door, mom, went, open, looked, up, saw, great, all. </div>
                <div class="incorrect-rect"> 8 WORDS </div>
                <div class="incorrect-report-text"> Adam, Grandparents, fell, Adams, crutches, better, smiling, helped </div>
        </>
  );
}

export default Report;