import React from "react";
import '../style-sheet/Button.css';



function Button({text, isClickButton, handleClick}) {
    return (
        <button
            className={ isClickButton ? 'handleClick' : 'restart-button' }
            onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button;