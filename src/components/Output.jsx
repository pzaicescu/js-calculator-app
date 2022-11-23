import React, {useContext} from 'react';
import {AppContext} from "../context/context";

const Output = () => {

    const {formula, result} = useContext(AppContext)

    return (
        <div>
            <div className="formula">{formula}</div>
            <div className="output">{result}</div>
        </div>
    );
};

export default Output;
