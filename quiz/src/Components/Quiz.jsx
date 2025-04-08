import React, { useState } from 'react'
import QUESTIONS from '../questions.js'
import quizComplete from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer.jsx';

function Quiz() {
    const [userAnswers, SetUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        SetUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });
    }


    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizComplete} alt="trophy icon" />
                <h2>Quiz Complete</h2>
            </div>
        )
    }



    const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswer.sort(() => Math.random() - 0.5)

    return (
        <div id='quiz'>

            <div id="question">
                <QuestionTimer timeout={10000} OnTimeOut={() => handleSelectAnswer(null)} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswer.map((answer) => (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )


}

export default Quiz
