import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
function Quiz() {
    const [userAnswers, SetUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer
    ) {
        SetUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    },
        []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizComplete} alt="trophy icon" />
                <h2>Quiz Complete</h2>
            </div>
        );
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSlectedAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}

export default Quiz;
