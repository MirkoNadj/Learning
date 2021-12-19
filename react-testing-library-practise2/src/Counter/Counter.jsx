import React, {useState} from "react";
import './Counter.css'

function Counter() {

const [counterValue, setCounterValue] = useState(0);
const [inputValue, setInputValue] = useState(1);

const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
}

const subFromCounter = () => {
    setCounterValue(counterValue - inputValue);
}

    return (
        <div>
            <h1 data-testid="header">My Counter</h1>
            <h2 data-testid="counter">{counterValue}</h2>
            <button data-testid="add-btn" onClick={addToCounter}>+</button>            
            <input
                data-testid="input"
                value={inputValue}
                type="number"
                className="text-center"
                onChange={(e) => {
                    setInputValue(parseInt(e.target.value))
                }}
            />
            <button data-testid="sub-btn" onClick={subFromCounter}>-</button>
        </div>
    );
}

export default Counter;