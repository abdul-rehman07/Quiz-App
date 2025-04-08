import React, { useEffect, useState } from 'react'

function QuestionTimer({ timeout, OnTimeOut }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {

        setTimeout(OnTimeOut, timeout);

    }, [timeout, OnTimeOut]);


    useEffect(() => {

        setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);
    }, [])
    return (
        <progress id='question-time' max={timeout} value={remainingTime} />
    )
}

export default QuestionTimer
