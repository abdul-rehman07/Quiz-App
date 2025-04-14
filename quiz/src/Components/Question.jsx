import React from 'react'
import QuestionTimer from './QuestionTimer.jsx'
import Answers from './Answers.jsx'
function Question({
    questionText,
    answers,
    onSlectedAnswer,
    selectedAnswer,
    answerState,
    onSkipAnswer

}) {
    return (
        <div>
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
                    onSelect={onSlectedAnswer}
                />
            </div>
        </div>
    )
}

export default Question
