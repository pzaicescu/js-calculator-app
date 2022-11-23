import './App.css';
import Output from "./components/Output";
import Button from "./components/Button";
import {AppContextProvider} from "./context/context";

const buttons = [
    {id: "clear", value: "AC"},
    {id: "divide", value: "/"},
    {id: "multiply", value: "*"},
    {id: "seven", value: 7},
    {id: "eight", value: 8},
    {id: "nine", value: 9},
    {id: "subtract", value: "-"},
    {id: "four", value: 4},
    {id: "five", value: 5},
    {id: "six", value: 6},
    {id: "add", value: "+"},
    {id: "one", value: 1},
    {id: "two", value: 2},
    {id: "three", value: 3},
    {id: "equals", value: "="},
    {id: "zero", value: 0},
    {id: "decimal", value: "."},
]

const App = () => {

    return (
        <div id="app">
            <AppContextProvider>
                <div className="calculator">
                    <Output/>
                    <div className="buttons-wrapper">
                        {buttons.map((button) =>
                            <Button
                                id={button.id}
                                key={button.id}
                                value={button.value}
                            />
                        )}
                    </div>
                </div>
                <h5>@p.zaicescu</h5>
            </AppContextProvider>
        </div>
    );
};

export default App;
