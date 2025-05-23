import React, { useRef } from "react";

function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffledAnswer = useRef();

    if (!shuffledAnswer.current) {
        shuffledAnswer.current = [...answers];
        shuffledAnswer.current.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
            {shuffledAnswer.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = "";
                if (answerState === "answered" && isSelected) {
                    cssClass = "selected";
                }
                if (
                    (answerState === "correct" || answerState === "wrong") &&
                    isSelected
                ) {
                    console.log("going to set color", answerState);
                    cssClass = answerState;
                }
                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => onSelect(answer)}
                            className={cssClass}
                            disabled={answerState != ""}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default Answers;
