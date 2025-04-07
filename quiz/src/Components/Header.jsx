import React from "react";
import imglogo from "../assets/quiz-logo.png";
function Header() {
    return (
        <header>
            <img src={imglogo} />
            <h1>Quiz App</h1>
        </header>
    );
}

export default Header;
