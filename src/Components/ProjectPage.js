import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect } from 'react';

//Components
import Header from './Header';

import './ProjectPage.css';


const ProjectPage = () => {

    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [triv, setTriv] = useState([]);
    useEffect(() => {
        trivs()
    }, [])

    const trivs = async () => {
        const response = await fetch("https://the-trivia-api.com/api/questions?categories=food_and_drink&limit=5")

        setTriv(await response.json())
    }
    let navigate = useNavigate();

    let place = (Math.floor(Math.random() * 1)); 
    var answers = [
        // {
        //      prompt:"text",
        //      options: [
        //         {id: 0, text:"placeholder", isCorrect:false},
        //         {id: 1, text:"placeholder", isCorrect:false},
        //         {id: 2, text:"placeholder", isCorrect:false},
        //         {id: 3, text:"placeholder", isCorrect:true}
        //      ],
        // }
    ];

    var questions = []
    var correct = []
    
    let count = 0;
    let percentage = score/(currentQuestion)

    const clicked = ()=> {
        var chosen = document.getElementsByName("radio");

        console.log("actual: " + correct[currentQuestion])
          
        for(let i = 0; i < chosen.length; i++) {
            console.log("I:" + i)
            console.log("chosen: " + chosen[i].value)
            if(chosen[i].checked){
                if (chosen[i].value == correct[currentQuestion]){
                    setScore(score+1)
                }

            }

        }

        if (currentQuestion+1 < questions.length){
            setCurrentQuestion(currentQuestion+1)
        } else {
            setCurrentQuestion(currentQuestion+1)
            setResult(true);
        }
        
        
    }

    const restartGame = () => {
         setScore(0);
         setResult(false);
         setCurrentQuestion(0);

    }

    {triv.map((data) => {
        
        questions.push(data.question)
        correct.push(data.correctAnswer)

        switch(place){
            case 0:
                answers.push(data.correctAnswer)
                answers.push(data.incorrectAnswers[0])
                answers.push(data.incorrectAnswers[1])
                answers.push(data.incorrectAnswers[2])
                break;
            case 1:
                answers.push(data.incorrectAnswers[0])    
                answers.push(data.correctAnswer)
                answers.push(data.incorrectAnswers[1])
                answers.push(data.incorrectAnswers[2])
                break;
            case 2:
                answers.push(data.incorrectAnswers[0])
                answers.push(data.incorrectAnswers[1])
                answers.push(data.correctAnswer)
                answers.push(data.incorrectAnswers[2])
                break;
            case 3:
                answers.push(data.incorrectAnswers[0])
                answers.push(data.incorrectAnswers[1])
                answers.push(data.incorrectAnswers[2])
                answers.push(data.correctAnswer)
                break;
        }

    })}

    console.log(place);

    return (
        <div>
            <Header/>
            <section class="projects">
            <h2>Number Correct: {score}</h2>
            <h2>Current Question out of: {currentQuestion}</h2>

                {result ? (
                    <div className="final-results">
                    <h1>Percent Correct: {percentage}</h1>
                    <button onClick={() => restartGame()} class="purple_btn">Restart Game</button>
                    </div>
                ) : (
                    <div className = "questionCard">
                        <p className = "list-group-item" key ={count}>{questions[currentQuestion]}</p>
                        <label class="container">{answers[currentQuestion*4]}
                        <input type="radio" name="radio" value={answers[currentQuestion*4]}></input>
                        <span class="checkmark"></span>
                        </label>
                        <label class="container">{answers[currentQuestion*4+1]}
                        <input type="radio"  name="radio" value={answers[currentQuestion*4+1]}></input>
                        <span class="checkmark"></span>
                        </label>
                        <label class="container">{answers[currentQuestion*4+2]}
                        <input type="radio" name="radio" value={answers[currentQuestion*4+2]}></input>
                        <span class="checkmark"></span>
                        </label>
                        <label class="container">{answers[currentQuestion*4+3]}
                        <input type="radio"  name="radio" value={answers[currentQuestion*4+3]}></input>
                        <span class="checkmark"></span>
                        </label>
                        <button onClick={() => clicked()} class="purple_btn">Check Answer</button>
                    </div>
                )}

                <button onClick={() => {navigate("/")}} class="proj_btn">Return Home</button>
            </section>

            
            <section class="projects">

            </section>
            <section class="projects">
                
            </section>
        </div>
    )
}

export default ProjectPage;
