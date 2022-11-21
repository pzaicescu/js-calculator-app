import React from 'react';

const Button = (props) => {
    const handleClickButton = () => {
        console.log(props.value)
    }

    return (
        <button className="button" id={props.id} onClick={handleClickButton}>{props.value}</button>
    );
};

export default Button;
