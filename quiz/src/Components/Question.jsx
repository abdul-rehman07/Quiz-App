import React, { useState } from 'react'
import QuestionTimer from './QuestionTimer.jsx'
import Answers from './Answers.jsx'
import questions from '../questions.js';
function Question({
    questionText,
    answers,
    onSlectedAnswer,
    selectedAnswer,
    answerState,
    onSkipAnswer

}) {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: true
            })
        }, 1000);
    }
    return (

        <div id="question">
            <QuestionTimer
                timeout={10000}
                OnTimeOut={onSkipAnswer
                } />
            <h2>{questionText}</h2>
            <Answers
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>

    )
}

export default Question
