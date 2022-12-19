import React from 'react'
import {useNavigate} from 'react-router-dom';

import "./Experiences.css";

const Experiences = () => {
    let navigate = useNavigate();
    return (
        <body id="portfolio" class="port__tile">
            <h3 class="exp__title">Settings</h3>

            <div class="ornamentxxx"></div>
            <div class="exp__tile2">
                <div class="exp__list">
                <div class="select-box">
                    <label for="cat"><b>Categories: </b></label>
                    <br/>
                    <select name="cat" id="cat">
                        <option value="All">All</option>
                        <option value="Arts and Literture">Arts and Literture</option>
                        <option value="Film and TV">Film and TV</option>
                        <option value="Food and Drink">Food and Drink</option>
                        <option value="General Knowledge">General Knowledge</option>
                        <option value="Geography">Geography</option>
                        <option value="History">History</option>
                        <option value="Music">Music</option>
                        <option value="Science">Science</option>
                        <option value="Society and Culture">Society and Culture</option>
                        <option value="Sports and Leisure">Sports and Leisure</option>
                    </select>
                </div>
                <div class="select-box">
                    <label for="diff"><b>Difficulty: </b></label>
                    <br/>
                    <select name="diff" id="diff">
                        <option value="Philadelphia">Any</option>
                        <option value="Tuscon">Easy</option>
                        <option value="Tampa">Medium</option>
                        <option value="Nashville">Hard</option>
                    </select>
                </div>
                <br></br>
                <div class="select-box">
                    <label for="limit"><b>Number of Questions: </b></label>
                    <br/>
                    <input name="limit" id="limit" type="range" min="1" max="20" value="10"></input>
                </div>
                <div class="select-box">
                    <label for="city"><b>Tags: </b></label>
                    <br/>
                    <select name="city" id="city">
                        <option value="Philadelphia">University of Pennsylvania</option>
                        <option value="Tuscon">University of Arizona</option>
                        <option value="Tampa">University of Tampa</option>
                        <option value="Nashville">Vanderbilt University</option>
                        <option value="New Orleans">Tulane University</option>
                        <option value="Saint Louis">Washington University in St. Louis</option>
                        <option value="Santa Barbara">University of Calfornia Santa Barbara</option>
                    </select>
                </div>
                <div class="select-box">
                    <label for="city"><b>Question Region: </b></label>
                    <br/>
                    <select name="city" id="city">
                        <option value="Philadelphia">University of Pennsylvania</option>
                        <option value="Tuscon">University of Arizona</option>
                        <option value="Tampa">University of Tampa</option>
                        <option value="Nashville">Vanderbilt University</option>
                        <option value="New Orleans">Tulane University</option>
                        <option value="Saint Louis">Washington University in St. Louis</option>
                        <option value="Santa Barbara">University of Calfornia Santa Barbara</option>
                    </select>
                </div>
                </div>
            </div>
            <button onClick={() => {navigate("/projects")}} class="port__btn">START</button>
        </body>
    )
}

export default Experiences;