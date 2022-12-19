import React from 'react'

import "./Experiences.css";

const Experiences = () => {
    return (
        <body id="portfolio" class="port__tile">
            <h3 class="exp__title">Settings</h3>

            <div class="ornamentxxx"></div>
            <div class="exp__tile2">
                <div class="exp__list">
                <div class="select-box">
                    <label for="city"><b>Categories: </b></label>
                    <br/>
                    <select name="city" id="city">
                        <option value="New Orleans">All</option>
                        <option value="Philadelphia">Arts and Literture</option>
                        <option value="Tuscon">Film and TV</option>
                        <option value="Tampa">Food and Drink</option>
                        <option value="Nashville">General Knowledge</option>
                        <option value="New Orleans">Geography</option>
                        <option value="Saint Louis">History</option>
                        <option value="Santa Barbara">Music</option>
                        <option value="New Orleans">Science</option>
                        <option value="Saint Louis">Society and Culture</option>
                        <option value="Santa Barbara">Sports and Leisure</option>
                    </select>
                </div>
                <div class="select-box">
                    <label for="city"><b>Difficulty: </b></label>
                    <br/>
                    <select name="city" id="city">
                        <option value="Philadelphia">Any</option>
                        <option value="Tuscon">Easy</option>
                        <option value="Tampa">Medium</option>
                        <option value="Nashville">Hard</option>
                    </select>
                </div>
                <br></br>
                <div class="select-box">
                    <label for="city"><b>Number of Questions: </b></label>
                    <br/>
                    <input type="range" min="1" max="20" value="10"></input>
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
        </body>
    )
}

export default Experiences;