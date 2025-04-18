import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

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
        return <Summary userAnswers={userAnswers} />
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
