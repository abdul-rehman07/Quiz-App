import React from 'react'
import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from '../questions.js';

function Summary({ userAnswers }) {


    return (
        <div id="summary">
            <img src={quizComplete} alt="trophy icon" />
            <h2>Quiz Complete</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>Skipped</span>
                </p>
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';
                    if (answer === null) {
                        cssClass += ' skipped';
                    } else {

                    }
                    return (
                        <li key={answer}>
                            <h3>{index + 1}</h3>
                            <p className='question'> {QUESTIONS[index].text}</p>
                            <p className='user-answer'>{answer ?? 'Skipped'}</p>
                        </li>

                    )
                })}
            </ol>

        </div>
    )
}

export default Summary
