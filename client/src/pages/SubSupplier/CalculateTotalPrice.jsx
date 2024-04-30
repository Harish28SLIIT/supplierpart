import React, { useState } from 'react';React

import { Link } from 'react-router-dom';
const Calculator = () => {
    const [display, setDisplay] = useState('');
    const [currentNumber, setCurrentNumber] = useState('');
    const [previousNumber, setPreviousNumber] = useState('');
    const [operator, setOperator] = useState('');

    const handleNumberClick = (value) => {
        setCurrentNumber(currentNumber + value);
        setDisplay(display + value);
    };

    const handleOperatorClick = (value) => {
        if (currentNumber !== '') {
            if (previousNumber !== '') {
                handleEqual();
            }
            setPreviousNumber(currentNumber);
            setCurrentNumber('');
            setOperator(value);
            setDisplay(display + ' ' + value + ' ');
        }
    };

    const handleEqual = () => {
        if (previousNumber !== '' && currentNumber !== '') {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(previousNumber) + parseFloat(currentNumber);
                    break;
                case '-':
                    result = parseFloat(previousNumber) - parseFloat(currentNumber);
                    break;
                case '*':
                    result = parseFloat(previousNumber) * parseFloat(currentNumber);
                    break;
                case '/':
                    result = parseFloat(previousNumber) / parseFloat(currentNumber);
                    break;
                default:
                    return;
            }
            setDisplay(result.toString());
            setCurrentNumber(result.toString());
            setPreviousNumber('');
            setOperator('');
        }
    };

    const handleClear = () => {
        setDisplay('');
        setCurrentNumber('');
        setPreviousNumber('');
        setOperator('');
    };

    return (
        <div className="calculator">
            <div className="display">{display || '0'}</div>
            <div className="buttons">
                <button className="button" onClick={() => handleNumberClick('1')}>1</button>
                <button className="button" onClick={() => handleNumberClick('2')}>2</button>
                <button className="button" onClick={() => handleNumberClick('3')}>3</button>
                <button className="operator" onClick={() => handleOperatorClick('+')}>+</button>
                <button className="button" onClick={() => handleNumberClick('4')}>4</button>
                <button className="button" onClick={() => handleNumberClick('5')}>5</button>
                <button className="button" onClick={() => handleNumberClick('6')}>6</button>
                <button className="operator" onClick={() => handleOperatorClick('*')}>*</button>
                <button className="button" onClick={() => handleNumberClick('7')}>7</button>
                <button className="button" onClick={() => handleNumberClick('8')}>8</button>
                <button className="button" onClick={() => handleNumberClick('9')}>9</button>
                <button className="operator" onClick={() => handleOperatorClick('-')}>-</button>
                <button className="button zero" onClick={() => handleNumberClick('0')}>0</button>
                <button className="button" onClick={() => handleNumberClick('.')}>.</button>
                <button className="equal" onClick={handleEqual}>=</button>
                <button className="operator" onClick={() => handleOperatorClick('/')}>/</button>
            </div>
            <button className="clear" onClick={handleClear}>Clear</button>
            <div className='mb-2 font-serif'></div>
            <div className='flex flex-row p-3 justify-between font-serif'>
                <Link to='/productdetails' className='new_btn ml-4'>Back</Link>
            </div>
        </div>
    );
};

export default Calculator;

