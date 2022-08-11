import { useState } from 'react';
import Functions from './components/Functions'
import MathOperation from './components/MathOperation'
import Numbers from './components/Numbers';
import Result from './components/Result'
import './App.css'

const App = () => {
    const [digit, setDigit] = useState([]);

    const onClickNumber = (number) => {
        setDigit([ number])
    }

    return (
        <main className='react-calculator'>
            <div className="result">
                <Result value={digit}/>
            </div>
            <Numbers onClickNumber={(number) => onClickNumber(number)}/>
            <Functions
                onContentClear={(operation) => console.log('clear', operation)}
                onDelete={(operation => console.log('delete', operation))}
            />
            <MathOperation
                onClickOperation={(operation) => console.log('operation', operation)}
                onClickEqual={(equal) => console.log('equal', equal)}
            />        
        </main>
    )
}

export default App

