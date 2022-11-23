import React, {useContext} from 'react';
import basicMath from 'advanced-calculator'
import {AppContext} from "../context/context";

const Button = (props) => {

    const {
        formula,
        setFormula,
        setResult,
        isEqualPressed,
        setIsEqualPressed,
    } = useContext(AppContext)

    const handleClickButton = () => {
        // TODO: implement logic for 0

        setFormula(formula.concat(props.value))

        if (props.value === "AC") {
            setFormula("")
            setResult(0)
            setIsEqualPressed(false)
        }
        if (props.value === "=") {
            setFormula(formula.concat(`=${basicMath.evaluate(formula)}`))
            setResult(basicMath.evaluate(formula))
            setIsEqualPressed(true)
        }

        if (isEqualPressed) {
            setFormula("")
            setIsEqualPressed(false)
            setResult(0)
        }
        if (props.value === "*" || props.value === "/" || props.value === "-" || props.value === "+") {

            if ((formula.charAt(formula.length - 1) === "*") ||
                (formula.charAt(formula.length - 1) === "/") ||
                (formula.charAt(formula.length - 1) === "-") ||
                (formula.charAt(formula.length - 1) === "+")) {

                const newFormula = formula.slice(0, -1)
                setFormula(newFormula.concat(props.value))
            }
        }
    }

    return (
        <button className="button"
                id={props.id}
                onClick={handleClickButton}
                disabled={isEqualPressed && props.value === "="}
        >{props.value}</button>
    );
};

export default Button;
