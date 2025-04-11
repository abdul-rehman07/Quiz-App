import React, { useEffect, useState } from "react";

function QuestionTimer({ timeout, OnTimeOut }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(OnTimeOut, timeout);
        return () => {
            clearInterval(timer);
        }
    }, [timeout, OnTimeOut]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval)
        };
    }, []);
    return <progress id="question-time" max={timeout} value={remainingTime} />;
}

export default QuestionTimer;
