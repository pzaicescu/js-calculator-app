import {createContext, useState} from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [formula, setFormula] = useState("")
    const [result, setResult] = useState(0)
    const [isEqualPressed, setIsEqualPressed] = useState(false)


    return <AppContext.Provider value={{
        formula,
        setFormula,
        result,
        setResult,
        isEqualPressed,
        setIsEqualPressed,
    }}>
        {props.children}
    </AppContext.Provider>
}
