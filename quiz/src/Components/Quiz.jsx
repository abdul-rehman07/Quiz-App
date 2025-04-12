import React, { useCallback, useEffect, useState } from 'react'
import QUESTIONS from '../questions.js'
import quizComplete from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer.jsx';

function Quiz() {
    const [answerState, setAnswerState] = useState("");
    const [userAnswers, SetUserAnswers] = useState([]);

    const activeQuestionIndex =
        answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer
    ) {
        setAnswerState('answered')
        SetUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct')
            } else {
                selectedAnswer('wrong')
            }

            setTimeout(() => {
                setAnswerState('');
            }, 2000);

        }, 1000);
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])


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
                <QuestionTimer
                    key={activeQuestionIndex}
                    timeout={10000}
                    OnTimeOut={handleSkipAnswer
                    } />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswer.map((answer) => {
                        const isSelected = userAnswers[userAnswers.length - 1] === answer;
                        let cssClass = '';
                        if (answerState === 'answered' && isSelected) {
                            cssClass = 'selected'
                        }

                        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {

                            cssClass == answerState;

                        }
                        return (<li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>
                                {answer}
                            </button>
                        </li>)
                    }
                    )}
                </ul>
            </div>

        </div>
    )


}

export default Quiz
