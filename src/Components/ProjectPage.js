import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect } from 'react';

//Components
import Header from './Header';

import './ProjectPage.css';


const ProjectPage = () => {

    const [triv, setTriv] = useState([]);
    useEffect(() => {
        trivs()
    }, [])

    const trivs = async () => {
        const response = await fetch("https://the-trivia-api.com/api/questions?categories=food_and_drink&limit=1")

        setTriv(await response.json())
    }
    let navigate = useNavigate();

    return (
        <div>
            <Header/>
            <section class="projects">

                {triv.map((data) => {
                    return(
                        <>
                            <script>
                            let place = (Math.floor(Math.random() * 4)); 
                               
                            </script>
                            <p className = "list-group-item" key ={data.id}>{data.question}</p>
                            <label class="container">{data.incorrectAnswers[0]}
                            <input type="radio" name="radio" value={data.incorrectAnswers[0]}></input>
                            <span class="checkmark"></span>
                            </label>
                            <label class="container">{data.incorrectAnswers[1]}
                            <input type="radio"  name="radio" value={data.incorrectAnswers[1]}></input>
                            <span class="checkmark"></span>
                            </label>
                            <label class="container">{data.incorrectAnswers[2]}
                            <input type="radio" name="radio" value={data.incorrectAnswers[2]}></input>
                            <span class="checkmark"></span>
                            </label>
                            <label class="container">{data.correctAnswer}
                            <input type="radio"  name="radio" value={data.correctAnswer}></input>
                            <span class="checkmark"></span>
                            </label>
                            <button onClick={() => {navigate("/")}} class="mc_btn">Check Answer</button>
                        </>
                    )
                })}

                

                <button onClick={() => {navigate("/")}} class="proj_btn">Return Home</button>
            </section>
        </div>
    )
}

export default ProjectPage;
